import { Injectable } from '@nestjs/common';
import { BaselineDto } from './dto/baseline.dto';
import { ProjectDto } from './dto/project.dto';
import { ResponseDto } from './dto/response.dto';
import { CdmAmsIiiBnReq } from './message/cdm-ams-iii-bn-req';
import { CdmAmsIiiBnRes } from './message/cdm-ams-iii-bn-res';

@Injectable()
export class CdmAmsIiiBnService {
    public AMSIIIBNEmission(req: CdmAmsIiiBnReq){
        let response: CdmAmsIiiBnRes = new CdmAmsIiiBnRes();
        let responseArray = new Array();
    
        for (let arr in req.baseline){
            console.log(arr)
    
          let baseResponse = new ResponseDto();
          baseResponse.year = req.baseline[arr].year;
          let secbl = this.baselineEmission(req.baseline[arr])
          let project = this.projectEmission(req.project[arr])
          let secpr = project.secpk;
          let efco2 = project.emissions;
          let baselineEmission = 0; let projectEmission = 0;
          let er = 0;

          for (let ele in secbl){
            baselineEmission += efco2[ele]*(secbl[ele]/secpr[ele])
            projectEmission += efco2[ele]
            er += efco2[ele]* ((secbl[ele]/secpr[ele])-1)
          }
          baseResponse.baseLineEmission = baselineEmission
          baseResponse.projectEmission = projectEmission
          baseResponse.emissionReduction = er

        console.log(baseResponse)
    
          responseArray.push(baseResponse);
        }
        response.response = responseArray;
        response.metaData = req
        return response;
    }

    // calculate baseline emission
    public baselineEmission(baseline: BaselineDto) {
        let emissions = new Array();
        let route = baseline.route;
        let secFossil = 0;
        let secElec = 0;

        for (let _route of route){
            for (let vehicle of _route.vehicle){
                for (let fuel of vehicle.fuel){
                    if (fuel.type === "Electricity"){
                        secElec = (fuel.fuelConsumption * 3.6) / (1 - fuel.tdlgrid)
                        console.log("secElec", secElec, fuel.fuelConsumption, fuel.tdlgrid)
                    }
                    else {
                        secFossil += fuel.fuelConsumption * fuel.ncv
                        console.log("secFossil", secFossil)
                    }
                }
            }
            emissions.push((secFossil + secElec) / _route.pk)
        }
        console.log("emissions",  emissions)

        return emissions;

    }

    // calculate project emission
    public projectEmission(project: ProjectDto) {
        let emissions = new Array();
        let secpk = new Array();
        let route = project.route;
        let efFossil = 0;
        let efElec = 0;
        
        for (let _route of route){
            for (let vehicle of _route.vehicle){
                for (let fuel of vehicle.fuel){
                    if (fuel.type === "Electricity"){
                        efElec = (fuel.fuelConsumption * fuel.efkgrid) / (1 - fuel.tdlgrid)
                    }
                    else {
                        efFossil += fuel.fuelConsumption * fuel.ncv * fuel.efco2;
                    }
                }
            }
            emissions.push(efElec + efFossil)
            secpk.push(_route.secpkm)
        }

        return {
            emissions: emissions,
            secpk: secpk
        };
    }
}
