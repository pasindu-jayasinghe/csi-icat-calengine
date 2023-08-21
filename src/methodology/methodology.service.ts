import { Injectable } from "@nestjs/common";
import { FuelDto as FuelDtoAMS } from "src/calculation/unfccc-ams-iii-s-v-4/dto/fuel.dto";
import { BaseLineEmissionDto as BaseLineEmissionDtoAMS } from "src/calculation/unfccc-ams-iii-s-v-4/dto/baselineEmission.dto";
import { projectDto as projectDtoAM0090 } from "src/calculation/unfccc_am0090_v_01_1_0/dto/project.dto";
import { ProjectDto as projectDtoJICA } from "src/calculation/jica-railway-freight/dto/project.dto";
import { ProjectDto as ProjectDtoAM0110 } from "src/calculation/am0110_ve02.0/dto/project.dto"

import { VehicleDto as VehicleDtoAMS } from "src/calculation/unfccc-ams-iii-s-v-4/dto/vehicle.dto";

import { vehicleDto as VehicleDtoAM0090 } from "src/calculation/unfccc_am0090_v_01_1_0/dto/vehicle.dto";

import { FuelDto as FuelDtoICAT } from "src/calculation/icat-tpm-2020/dto/fuel.dto";
import { fuelDto as FuelDtoAM0090 } from "src/calculation/unfccc_am0090_v_01_1_0/dto/fuel.dto";

import { VehicleDto as VehicleDtoICAT } from "src/calculation/icat-tpm-2020/dto/vehicle.dto";
import { BaselineDto as BaselineDtoICAT } from "src/calculation/icat-tpm-2020/dto/baseline.dto";
import { BaseLineDto as BaselineDtoAM0031 } from "src/calculation/cdm-am0031/dto/baseline.dto";
import { ProjectDto as ProjectDtoAM0031 } from "src/calculation/cdm-am0031/dto/project.dto";
import { baselineDto as BaselineDtoAM0090 } from "src/calculation/unfccc_am0090_v_01_1_0/dto/baseline.dto";
import { BaseLineDto as BaselineDtoAM0110 } from "src/calculation/am0110_ve02.0/dto/baseline.dto"
import { baselineDto as BaselineDtoAMC0016 } from "src/calculation/unfccc-am0016-v-5/dto/baseline.dto";
import { projecteDto as ProjectDtoAMC0016 } from "src/calculation/unfccc-am0016-v-5/dto/project.dto";
import { leakageDto as LeakageDtoAMC0016 } from "src/calculation/unfccc-am0016-v-5/dto/leakage.dto";


import { vehicleDto as VehicleDtoAMC0016 } from "src/calculation/unfccc-am0016-v-5/dto/vehicle.dto";
import { fuelDto as FuelDtoAMC0016 } from "src/calculation/unfccc-am0016-v-5/dto/fuel.dto";






import { ProjectDto as ProjectDtoICAT } from "src/calculation/icat-tpm-2020/dto/project.dto";
import { ElectricityDto } from "src/calculation/icat-tpm-2020/dto/electricity.dto";
import { SpecialValueDto } from "src/calculation/icat-tpm-2020/dto/specialValue.dto";
import { PriceElasticityDto } from "src/calculation/icat-tpm-2020/dto/priceElasticity.dto";
import { baselineDto } from "src/calculation/unfccc-ams-iii-bc/dto/baseline.dto";
import { fuelDto } from "src/calculation/unfccc-ams-iii-bc/dto/fuel.dto";
import { vehicleDto } from "src/calculation/unfccc-ams-iii-bc/dto/vehicle.dto";
import { MileStoneParameterDto } from "src/calculation/projection/dto/mile-stone-parameter.dto";
import { ProjectionReqMsg } from "src/calculation/projection/message/projection-req-msg";
import { BaseYearParameterDto } from "src/calculation/projection/dto/base-year-parameter.dto";
import { ProjectionService } from "src/calculation/projection/projection.service";
import { ProjectDto } from "src/calculation/jica-tcm-ms-p-v-3/dto/project.dto";
import { ProjectEmissionTypeEnum } from "src/calculation/enum/project-emisson-type.enum";
import { VehicleTypeEnum } from "src/calculation/enum/vehicle-type.enum";
import { TraficCongestionDto } from "src/calculation/jica-tcm-ms-p-v-3/dto/trafic-congestion.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Methodology } from "./enitity/methodology.entity";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { BaseLineDto } from "src/calculation/jica-railway-freight/dto/baseline.dto";
import { RouteDto } from "src/calculation/am0110_ve02.0/dto/route";
import { UnitEnum } from "src/calculation/enum/unit.enum";
import { BaselineDto as BaselineDtoAMSIII } from "src/calculation/cdm-ams-iii-ak/dto/baseline.dto";
import { ProjectDto as ProjectDtoAMSIII } from "src/calculation/cdm-ams-iii-ak/dto/project.dto";
import { LeakageDto as LeakageDtoAMSIII } from "src/calculation/cdm-ams-iii-ak/dto/leakage.dto";
import { PowerPlantDto as PowerPlantDtoAMSIII } from "src/calculation/cdm-ams-iii-ak/dto/powerplant.dto";
import { VehicleDto as VehicleDtoAMSIII } from "src/calculation/cdm-ams-iii-ak/dto/vehicle.dto";
import { FeedstockDto as FeedstockDtoAMSIII } from "src/calculation/cdm-ams-iii-ak/dto/feedstock.dto";
import { FuelDto as FuelDtoAMSIII } from "src/calculation/cdm-ams-iii-ak/dto/fuel.dto";
import { SoilDto as SoilDtoAMSIII } from "src/calculation/cdm-ams-iii-ak/dto/soil.dto";
import { StratumDto as StratumDtoAMSIII } from "src/calculation/cdm-ams-iii-ak/dto/stratum.dto";
import { residueDto as ResidueDtoAMSIII } from "src/calculation/cdm-ams-iii-ak/dto/residue.dto";
import { BaselineDto as BaselineDtoACM0017 } from "src/calculation/cdm-acm0017/dto/baseline.dto";
import { PowerplantDto as PowerplantDtoACM0017 } from "src/calculation/cdm-acm0017/dto/powerplant.dto";
import { FuelDto as FuelDtoACM0017 } from "src/calculation/cdm-acm0017/dto/fuel.dto";
import { ProjectDto as ProjectDtoACM0017 } from "src/calculation/cdm-acm0017/dto/project.dto";
import { FeedstockDto as FeedstockDtoACM0017 } from "src/calculation/cdm-acm0017/dto/feedstock.dto";
import { StratumDto as StratumDtoACM0017 } from "src/calculation/cdm-acm0017/dto/stratum.dto";
import { LeakageDto as LeakageDtoACM0017 } from "src/calculation/cdm-acm0017/dto/leakage.dto";
import { BaselineDto as BaseLineDtoAMSIIIAT } from "src/calculation/cdm-ams-iii-at/dto/baseline.dto";
import { ProjectDto as ProjectDtoAMSIIIAT } from "src/calculation/cdm-ams-iii-at/dto/project.dto";
import { VehicleDto as VehicleDtoAMSIIIAT } from "src/calculation/cdm-ams-iii-at/dto/vehicle.dto";
import { FuelDto as FuelDtoAMSIIIAT } from "src/calculation/cdm-ams-iii-at/dto/fuel.dto";
import { BaselineDto as BaseLineDtoAMSIIIBN } from "src/calculation/cdm-ams-iii-bn/dto/baseline.dto";
import { ProjectDto as ProjectDtoAMSIIIBN } from "src/calculation/cdm-ams-iii-bn/dto/project.dto";
import { VehicleDto as VehicleDtoAMSIIIBN } from "src/calculation/cdm-ams-iii-bn/dto/vehicle.dto";
import { FuelDto as FuelDtoAMSIIIBN } from "src/calculation/cdm-ams-iii-bn/dto/fuel.dto";
import { RouteDto as RouteDtoIIIBN } from "src/calculation/cdm-ams-iii-bn/dto/route.dto";
import { Any } from "typeorm";
import { LeakageDto } from "src/calculation/cdm-am0031/dto/leakage.dto";

@Injectable()
export class MethodologyService extends TypeOrmCrudService<Methodology>{

    constructor(
        @InjectRepository(Methodology) repo) {
        super(repo);
    }
    public async crete(req: Methodology) {
        this.repo.save(req)
    }

    public async getdatails() {
        return this.repo.find({ relations: ['country', 'sector', 'applicability', 'mitigationActionType'] });
    }

    public selectArray(req: any, parameterName: string) {
        var arr = new Array();

        for (let num in req) {
            if (req[num][parameterName] === true) {
                arr.push(req[num]);
            }
        }
        return arr;
    }

    public selectArrayBothType(req: any, parameterName: string, secondParameterName: string) {
        var arr = new Array();

        for (let num in req) {
            if (req[num][parameterName] === true || req[num][secondParameterName] === true) {
                arr.push(req[num]);
            }
        }
        return arr;
    }
    public selectProjectionArray(req: any, parameterName: string) {
        var arr = new Array();

        for (let num in req) {
            if (req[num][parameterName] === true && req[num]["projectionYear"] != null) {
                arr.push(req[num]);
            }
        }
        return arr;
    }

    public selectMile(req: any, parameterName: string) {


        for (let num in req) {
            if (req[num][parameterName] === true && req[num]["projectionYear"] === null) {
                return req[num]["value"];
            }
        }

    }

    public selectParameterArray(req: any, parameterName: string) {
        var arr = new Array();

        for (let num in req) {
            if (!arr.includes(req[num][parameterName]) && req[num][parameterName] != "" && req[num][parameterName] != "Common" && req[num][parameterName] != "ALL") {
                arr.push(req[num][parameterName]);
            }
        }
        return arr;
    }

    public selectProjectionParameter(req: any) {
        var arr = new Array();


        for (let num in req) {
            var mileStoneParameter = new MileStoneParameterDto;
            mileStoneParameter.mileStoneValue = req[num]["value"];
            mileStoneParameter.year = req[num]["projectionYear"];
            arr.push(mileStoneParameter);
        }
        return arr;
    }

    public projection(req: any, base: number, project: number, leakege: number, mile: number) {
        // console.log(base,project,mile)
        var request = new ProjectionReqMsg;
        var baseparameter = new BaseYearParameterDto;

        baseparameter.baselineEmission = base;
        baseparameter.projectEmission = project;
        baseparameter.leakegeEmission = leakege;
        baseparameter.baseYearMileStone = mile;

        request.mileStoneParameter = this.selectProjectionParameter(req);
        request.baseYearParameter = baseparameter;

        return request;
    }
    public assignpara(req: any, year: number) {
        let project = new projectDtoJICA();
        let value: number;
        for (let num in req) {
            (this.getValue(req[num], "btkm") === -999) ? value = 1 : project.btkm = this.getValue(req[num], "btkm");
            (this.getValue(req[num], "ec") === -999) ? value = 1 : project.ec = this.getValue(req[num], "ec");
            (this.getValue(req[num], "ef") === -999) ? value = 1 : project.ef = this.getValue(req[num], "ef");

            (this.getValue(req[num], "btdp") === -999) ? value = 1 : project.btdp = this.getValue(req[num], "btdp");
            (this.getValue(req[num], "p") === -999) ? value = 1 : project.p = this.getValue(req[num], "p");

        }
        project.year = year;
        return project;
    }
    public assignParameter0(req: any, vehicledata: any, year: number, meth: string) {
        let baseEmission = new Array();
        for (let vehi in vehicledata) {
            let baselineEmission = new BaseLineDto;
            let vehicleArray = new Array();
            let vehicle = new VehicleDtoAMS;
            for (let num in req) {
                let value: number;
                console.log("ssssssssssss")
                baselineEmission.baselineEmissonType = ProjectEmissionTypeEnum.model_shift;

                (this.getValue(req[num], "ef_km") === -999) ? value = 1 : vehicle.ef_km = this.getValue(req[num], "ef_km");
                (this.getValue(req[num], "ms") === -999) ? value = 1 : vehicle.ms = this.getValue(req[num], "ms");
                (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");
                (this.getValue(req[num], "sfc") === -999) ? value = 1 : vehicle.sfc = this.getValue(req[num], "sfc");

            }
            vehicleArray.push(vehicle);
            baselineEmission.vehicle = vehicleArray;
            baselineEmission.year = year;
            baseEmission.push(baselineEmission);

        }
        return baseEmission;
    }
    public fualData(req: any, fueldata: any) {
        let fuelArray = new Array();
        for (let fu in fueldata) {
            let fuel = new FuelDtoAMS;
            for (let num in req) {
                if (fueldata[fu] == req[num]['fuelType']) {
                    let value: number;
                    fuel.type = req[num]["fuelType"];
                    (this.getValue(req[num], "w") === -999) ? value = 1 : fuel.w = this.getValue(req[num], "w");
                    (this.getValue(req[num], "ef") === -999) ? value = 1 : fuel.ef = this.getValue(req[num], "ef");
                    (this.getValue(req[num], "ncv") === -999) ? value = 1 : fuel.ncv = this.getValue(req[num], "ncv");
                    (this.getValue(req[num], "tdl") === -999) ? value = 1 : fuel.tdl = this.getValue(req[num], "tdl");
                    (this.getValue(req[num], "gwp") === -999) ? value = 1 : fuel.gwp = this.getValue(req[num], "gwp");
                    (this.getValue(req[num], "density") === -999) ? value = 1 : fuel.density = this.getValue(req[num], "density");                    
                    (this.getValue(req[num], "ef_ch4") === -999) ? value = 1 : fuel.ef_ch4 = this.getValue(req[num], "ef_ch4");
                }
            }
            fuelArray.push(fuel)
        }
        return fuelArray;
    }
    public routDta(req: any, routdata: any, vehicledata: any, name: string) {
        let baseline = new Array();;
        let base = new BaselineDtoAM0110();
        let pro = new ProjectDtoAM0110();
        let routArray: RouteDto[] = new Array();

        for (let ro in routdata) {
            let vehicleArray = new Array();
            for (let vehi in vehicledata) {

                let rout = new RouteDto;
                for (let num in req) {
                    (rout.name = routdata[ro])
                    let value: number;
                    if (routdata[ro] == req[num]['route']) {
                        (this.getValue(req[num], "t_jy") === -999) ? value = 1 : rout.t_jy = this.getValue(req[num], "t_jy");
                        (this.getValue(req[num], "W") === -999) ? value = 1 : rout.W = this.getValue(req[num], "W");
                        (this.getValue(req[num], "M") === -999) ? value = 1 : rout.M = this.getValue(req[num], "M");
                        (this.getValue(req[num], "L") === -999) ? value = 1 : rout.L = this.getValue(req[num], "L");
                        (this.getValue(req[num], "t_k") === -999) ? value = 1 : rout.t_k = this.getValue(req[num], "t_k");
                        (this.getValue(req[num], "t_ky") === -999) ? value = 1 : rout.t_ky = this.getValue(req[num], "t_ky");
                        (this.getValue(req[num], "ad_ky") === -999) ? value = 1 : rout.ad_ky = this.getValue(req[num], "ad_ky");
                        (this.getValue(req[num], "fc_pj") === -999) ? value = 1 : rout.fc_pj = this.getValue(req[num], "fc_pj");
                        (this.getValue(req[num], "ef_bl") === -999) ? value = 1 : rout.ef_bl = this.getValue(req[num], "ef_bl");

                        if (req[num]['vehical'] === vehicledata[vehi].vehicleName && req[num]['fuelType'] === vehicledata[vehi].fuel.type && !vehicleArray.includes(vehicledata[vehi])) {
                            vehicleArray.push(vehicledata[vehi])
                            // rout.vehicle = vehicledata[vehi];
                        }
                        (this.getValue(req[num], "distance") === -999) ? value = 1 : (this.getValue(req[num], "distance") > 0) ? rout.distance = this.getValue(req[num], "distance") : value = 1;

                    }

                }
                rout.vehicle = vehicleArray;
                let routName = routArray.map((dra) => { return dra.name })
                if (rout.vehicle.length > 0 && !routName.includes(rout.name)) {
                    routArray.push(rout);
                }
            }
        }
        // console.log(vehicleArray)
        if (name == "baseline") {
            base.routs = routArray;
            baseline.push(base);
        }
        else {
            pro.rout = routArray;
            baseline.push(pro);
        }

        return baseline;
    }

    public leakageData(req: any) {
        let Leakage = new LeakageDto;
        for (let leakage of req) {
            let value: number;
            (this.getValue(leakage, "src") === -999) ? value = 1 : Leakage.src = this.getValue(leakage, "src");
            (this.getValue(leakage, "rsx") === -999) ? value = 1 : Leakage.rsx = this.getValue(leakage, "rsx");
            (this.getValue(leakage, "rsy") === -999) ? value = 1 : Leakage.rsy = this.getValue(leakage, "rsy");
            (this.getValue(leakage, "bscr") === -999) ? value = 1 : Leakage.bscr = this.getValue(leakage, "bscr");
            (this.getValue(leakage, "dd_zx") === -999) ? value = 1 : Leakage.dd_zx = this.getValue(leakage, "dd_zx");
            (this.getValue(leakage, "dd_tx") === -999) ? value = 1 : Leakage.dd_tx = this.getValue(leakage, "dd_tx");
            (this.getValue(leakage, "dd_cx") === -999) ? value = 1 : Leakage.dd_cx = this.getValue(leakage, "dd_cx");

        }

        return Leakage;
    }

    public vehicleData(req: any, vehicleType: any, fueldata: any, check: string) {
        let routArray = new Array();
        for (let vehi in vehicleType) {

            for (let fu in fueldata) {
                let vehicle = new VehicleDtoAMS;
                for (let num in req) {
                    let value: number;
                    if (vehicleType[vehi] === req[num]["vehical"] && req[num]["fuelType"] === fueldata[fu].type) {
                        (vehicle.vehicleName = vehicleType[vehi])


                        vehicle.fuel = fueldata[fu];

                        (vehicleType[vehi] === "Pipeline") ? vehicle.vehiclety = VehicleTypeEnum.pipline : vehicle.vehiclety = 0;
                        (req[num]['fuelType'] === "Electricity") ? vehicle.vehicleType = VehicleTypeEnum.electric_vehicle : vehicle.vehicleType = VehicleTypeEnum.fuel_vehicle;

                        (this.getValue(req[num], "n") === -999) ? value = 1 : vehicle.n = this.getValue(req[num], "n");
                        (this.getValue(req[num], "d") === -999) ? value = 1 : vehicle.d = this.getValue(req[num], "d");
                        (this.getValue(req[num], "p") === -999) ? value = 1 : vehicle.p = this.getValue(req[num], "p");
                        (this.getValue(req[num], "t") === -999) ? value = 1 : vehicle.t = this.getValue(req[num], "t");
                        (this.getValue(req[num], "y") === -999) ? value = 1 : vehicle.y = this.getValue(req[num], "y");
                        (this.getValue(req[num], "v") === -999) ? value = 1 : vehicle.v = this.getValue(req[num], "v");
                        (this.getValue(req[num], "cv") === -999) ? value = 1 : vehicle.cv = this.getValue(req[num], "cv");
                        (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");
                        (this.getValue(req[num], "sd") === -999) ? value = 1 : vehicle.sd = this.getValue(req[num], "sd");
                        (this.getValue(req[num], "ms") === -999) ? value = 1 : vehicle.ms = this.getValue(req[num], "ms");
                        (this.getValue(req[num], "ir") === -999) ? value = 1 : vehicle.ir = this.getValue(req[num], "ir");
                        (this.getValue(req[num], "nzx") === -999) ? value = 1 : vehicle.nzx = this.getValue(req[num], "nzx");
                        (this.getValue(req[num], "sfc") === -999) ? value = 1 : vehicle.sfc = this.getValue(req[num], "sfc");
                        (this.getValue(req[num], "nisy") === -999) ? value = 1 : vehicle.nisy = this.getValue(req[num], "nisy");
                        (this.getValue(req[num], "ninx") === -999) ? value = 1 : vehicle.ninx = this.getValue(req[num], "ninx");
                        (this.getValue(req[num], "dd_l") === -999) ? value = 1 : vehicle.dd_l = this.getValue(req[num], "dd_l");
                        (this.getValue(req[num], "dd_m") === -999) ? value = 1 : vehicle.dd_m = this.getValue(req[num], "dd_m");
                        (this.getValue(req[num], "dd_s") === -999) ? value = 1 : vehicle.dd_s = this.getValue(req[num], "dd_s");
                        (this.getValue(req[num], "ef_km") === -999) ? value = 1 : vehicle.ef_km = this.getValue(req[num], "ef_km");

                        if (check == "check") {
                            if (req[num]['uomDataEntry'] == "tonne" && req[num]['code'] == 'fc') {
                                (this.getValue(req[num], "fc") === -999) ? value = 1 : vehicle.fc_mass = this.getValue(req[num], "fc");
                            }
                            if (req[num]['uomDataEntry'] != "tonne" && req[num]['code'] == 'fc') {
                                (this.getValue(req[num], "fc") === -999) ? value = 1 : vehicle.fc = this.getValue(req[num], "fc");
                            }
                        }
                        else {
                            (this.getValue(req[num], "fc") === -999) ? value = 1 : vehicle.fc = this.getValue(req[num], "fc");
                        }

                    }
                }
                if (vehicle.vehicleName) {
                    routArray.push(vehicle);
                }
            }
        }
        return routArray
    }

    public assignParameter1(req: any, vehicledata: any, fueldata: any, year: number, meth: string) {
        let baseEmission = new Array();
        if (fueldata.length > vehicledata.length) {
            for (let vehi in vehicledata) {
                let baselineEmission = new BaseLineDto;
                let vehicleArray = new Array();
                for (let fu in fueldata) {

                    let fuel = new FuelDtoAMS;
                    let vehicle = new VehicleDtoAMS;

                    for (let num in req) {
                        let value: number;

                        if (meth == "jica_railway_fr_electric" || meth == "jica_railway_pass_electric") {
                            baselineEmission.baselineEmissonType = ProjectEmissionTypeEnum.electrification;
                        }
                        if (meth == "jica_railway_fr_modal" || meth == "jica_railway_pass_modal") {
                            baselineEmission.baselineEmissonType = ProjectEmissionTypeEnum.model_shift;
                        }

                        if (fueldata[fu] === req[num]['fuelType'] && vehicledata[vehi] === req[num]['vehical']) {

                            (this.getValue(req[num], "ef_km") === -999) ? value = 1 : vehicle.ef_km = this.getValue(req[num], "ef_km");
                            (this.getValue(req[num], "ms") === -999) ? value = 1 : vehicle.ms = this.getValue(req[num], "ms");
                            (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");
                            (this.getValue(req[num], "sfc") === -999) ? value = 1 : vehicle.sfc = this.getValue(req[num], "sfc");
                        }
                        if (fueldata[fu] === req[num]['fuelType']) {
                            let value: number;
                            (req[num]['fuelType'] === "Electricity") ? vehicle.vehicleType = 2 : vehicle.vehicleType = 1;
                            fuel.type = req[num]["fuelType"];
                            (this.getValue(req[num], "ef") === -999) ? value = 1 : fuel.ef = this.getValue(req[num], "ef");
                            (this.getValue(req[num], "ncv") === -999) ? value = 1 : fuel.ncv = this.getValue(req[num], "ncv");
                            (this.getValue(req[num], "fc") === -999) ? value = 1 : fuel.fc = this.getValue(req[num], "fc");

                        }
                    }
                    vehicle.fuel = fuel;
                    console.log(vehicle)
                    vehicleArray.push(vehicle);
                }

                baselineEmission.vehicle = vehicleArray;
                baselineEmission.year = year;
                baseEmission.push(baselineEmission);

            }
        }
        else {
            for (let fu in fueldata) {
                let vehicleArray = new Array();
                let baselineEmission = new BaseLineDto;

                for (let vehi in vehicledata) {
                    let fuel = new FuelDtoAMS;
                    let vehicle = new VehicleDtoAMS;

                    for (let num in req) {
                        let value: number;

                        if (meth == "jica_railway_fr_electric" || meth == "jica_railway_pass_electric") { baselineEmission.baselineEmissonType = ProjectEmissionTypeEnum.electrification; }
                        else if (meth == "jica_railway_fr_modal" || meth == "jica_railway_pass_modal") { baselineEmission.baselineEmissonType = ProjectEmissionTypeEnum.model_shift; }

                        if (fueldata[fu] === req[num]['fuelType'] && vehicledata[vehi] === req[num]['vehical']) {

                            (this.getValue(req[num], "ef_km") === -999) ? value = 1 : vehicle.ef_km = this.getValue(req[num], "ef_km");
                            (this.getValue(req[num], "ms") === -999) ? value = 1 : vehicle.ms = this.getValue(req[num], "ms");
                            (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");
                            (this.getValue(req[num], "sfc") === -999) ? value = 1 : vehicle.sfc = this.getValue(req[num], "sfc");
                        }
                        if (fueldata[fu] === req[num]['fuelType']) {
                            let value: number;
                            (req[num]['fuelType'] === "Electricity") ? vehicle.vehicleType = 2 : vehicle.vehicleType = 1;
                            fuel.type = req[num]["fuelType"];
                            (this.getValue(req[num], "ef") === -999) ? value = 1 : fuel.ef = this.getValue(req[num], "ef");
                            (this.getValue(req[num], "ncv") === -999) ? value = 1 : fuel.ncv = this.getValue(req[num], "ncv");
                            (this.getValue(req[num], "fc") === -999) ? value = 1 : fuel.fc = this.getValue(req[num], "fc");

                        }
                    }
                    vehicle.fuel = fuel;
                    console.log(vehicle)
                    vehicleArray.push(vehicle);
                }


                baselineEmission.vehicle = vehicleArray;
                baselineEmission.year = year;
                baseEmission.push(baselineEmission);
                // console.log(baselineEmission)

            }
        }

        return baseEmission;
    }
    public assignPar(para: any, req: any, code: string, type: string, req2: any) {
        let baseEmission = new Array();


        if (code == "AM0031") {
            let value: number;
            let baselineEmission31 = new BaselineDtoAM0031;
            let projectEmission31 = new ProjectDtoAM0031;
            if (type == "isBaseline") {
                baselineEmission31.vehicle = req;
                for (let base of para) {
                    if (base["vehical"] == "Common" && base["fuelType"] == "") {
                        (this.getValue(base, "p") > 0) ? baselineEmission31.p = this.getValue(base, "p") : value = 1;
                    }
                }
                baseEmission.push(baselineEmission31)
            }
            else {
                projectEmission31.vehicle = req;
                projectEmission31.leakege = req2;
                baseEmission.push(projectEmission31)
            }
        }

        return baseEmission;
    }


    
    public assignParProject(para: any, req: any, code: string, type: string, req2: any) {
        let baseEmission = new Array();


        if (code == "UNFCCC_AM0016_V_5") {
            let value: number;
            let baselineEmission16 = new BaselineDtoAMC0016;
            let projectEmission16 = new ProjectDtoAMC0016;
            if (type == "isProject") {
                baselineEmission16.vehicle = req;
                for (let base of para) {
                    if (base["vehical"] == "Common" && base["fuelType"] == "") {
                        (this.getValue(base, "py") > 0) ? projectEmission16.py = this.getValue(base, "py") : value = 1;
                        (this.getValue(base, "gwpch4") > 0) ? projectEmission16.gwpch4 = this.getValue(base, "gwpch4") : value = 1;


                    }
                }
                baseEmission.push(projectEmission16)
            }
            else {
                projectEmission16.vehicle = req;
                projectEmission16.leakege = req2;
                baseEmission.push(projectEmission16)
            }
        }

        return baseEmission;
    }
    public assignParameter(req: any, vehicledata: any, fueldata: any, year: number) {
        let baseEmission = new Array();


        if (fueldata.length > vehicledata.length) {
            for (let vehi in vehicledata) {
                let baselineEmission = new BaseLineEmissionDtoAMS;
                let vehicleArray = new Array();
                for (let fu in fueldata) {
                    let fuel = new FuelDtoAMS;
                    let vehicle = new VehicleDtoAMS;
                    for (let num in req) {
                        let value: number;
                        (this.getValue(req[num], "distance") === -999) ? value = 1 : baselineEmission.distance = this.getValue(req[num], "distance");
                        (this.getValue(req[num], "ir") === -999) ? value = 1 : vehicle.ir = this.getValue(req[num], "ir");
                        (this.getValue(req[num], "tdl") === -999) ? value = 1 : baselineEmission.tdl = this.getValue(req[num], "tdl");
                        if (fueldata[fu] === req[num]['fuelType'] && vehicledata[vehi] === req[num]['vehical']) {

                            (this.getValue(req[num], "dp") > 0) ? vehicle.dp = this.getValue(req[num], "dp") : value = 1;
                            (this.getValue(req[num], "n") === -999) ? value = 1 : vehicle.n = this.getValue(req[num], "n");
                            (this.getValue(req[num], "d") === -999) ? vehicle.d = 0 : vehicle.d = this.getValue(req[num], "d");
                            (this.getValue(req[num], "d") > -999) ? vehicle.d = this.getValue(req[num], "d") : value = 1;
                            (this.getValue(req[num], "p") === -999) ? value = 1 : vehicle.p = this.getValue(req[num], "p");



                            (this.getValue(req[num], "efpkm") === -999) ? vehicle.ef_pkm = 0 : vehicle.ef_pkm = this.getValue(req[num], "efpkm");
                            (this.getValue(req[num], "ef_km") === -999) ? value = 1 : vehicle.ef_km = this.getValue(req[num], "ef_km");
                            (this.getValue(req[num], "ms") === -999) ? value = 1 : vehicle.ms = this.getValue(req[num], "ms");
                            (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");
                            (this.getValue(req[num], "sfc") === -999) ? value = 1 : vehicle.sfc = this.getValue(req[num], "sfc");
                        }
                        if (fueldata[fu] === req[num]['fuelType']) {
                            let value: number;
                            (req[num]['fuelType'] === "Electricity") ? vehicle.vehicleType = 2 : vehicle.vehicleType = 1;
                            fuel.type = req[num]["fuelType"];
                            (this.getValue(req[num], "ef") === -999) ? value = 1 : fuel.ef = this.getValue(req[num], "ef");
                            (this.getValue(req[num], "ncv") === -999) ? value = 1 : fuel.ncv = this.getValue(req[num], "ncv");
                            (this.getValue(req[num], "fc") === -999) ? value = 1 : fuel.fc = this.getValue(req[num], "fc");



                        }
                    }
                    vehicle.fuel = fuel;
                    console.log(vehicle)
                    vehicleArray.push(vehicle);
                }


                baselineEmission.vehicle = vehicleArray;
                baselineEmission.year = year;
                baseEmission.push(baselineEmission);
                // console.log(baselineEmission)

            }
        }
        else {
            for (let fu in fueldata) {
                let baselineEmission = new BaseLineEmissionDtoAMS;
                let vehicleArray = new Array();
                for (let vehi in vehicledata) {

                    let fuel = new FuelDtoAMS;
                    let vehicle = new VehicleDtoAMS;
                    for (let num in req) {
                        let value: number;
                        (this.getValue(req[num], "distance") === -999) ? value = 1 : baselineEmission.distance = this.getValue(req[num], "distance");
                        (this.getValue(req[num], "ir") === -999) ? value = 1 : vehicle.ir = this.getValue(req[num], "ir");
                        (this.getValue(req[num], "tdl") === -999) ? value = 1 : baselineEmission.tdl = this.getValue(req[num], "tdl");
                        if (fueldata[fu] === req[num]['fuelType'] && vehicledata[vehi] === req[num]['vehical']) {

                            (this.getValue(req[num], "dp") > 0) ? vehicle.dp = this.getValue(req[num], "dp") : value = 1;
                            (this.getValue(req[num], "n") === -999) ? value = 1 : vehicle.n = this.getValue(req[num], "n");
                            (this.getValue(req[num], "d") === -999) ? vehicle.d = 0 : vehicle.d = this.getValue(req[num], "d");
                            (this.getValue(req[num], "d") > -999) ? vehicle.d = this.getValue(req[num], "d") : value = 1;
                            (this.getValue(req[num], "p") === -999) ? value = 1 : vehicle.p = this.getValue(req[num], "p");



                            (this.getValue(req[num], "efpkm") === -999) ? vehicle.ef_pkm = 0 : vehicle.ef_pkm = this.getValue(req[num], "efpkm");
                            (this.getValue(req[num], "ef_km") === -999) ? value = 1 : vehicle.ef_km = this.getValue(req[num], "ef_km");
                            (this.getValue(req[num], "ms") === -999) ? value = 1 : vehicle.ms = this.getValue(req[num], "ms");
                            (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");
                            (this.getValue(req[num], "sfc") === -999) ? value = 1 : vehicle.sfc = this.getValue(req[num], "sfc");
                        }
                        if (fueldata[fu] === req[num]['fuelType']) {
                            let value: number;
                            (req[num]['fuelType'] === "Electricity") ? vehicle.vehicleType = 2 : vehicle.vehicleType = 1;
                            fuel.type = req[num]["fuelType"];
                            (this.getValue(req[num], "ef") === -999) ? value = 1 : fuel.ef = this.getValue(req[num], "ef");
                            (this.getValue(req[num], "ncv") === -999) ? value = 1 : fuel.ncv = this.getValue(req[num], "ncv");
                            (this.getValue(req[num], "fc") === -999) ? value = 1 : fuel.fc = this.getValue(req[num], "fc");



                        }
                    }
                    vehicle.fuel = fuel;
                    console.log(vehicle)
                    vehicleArray.push(vehicle);
                }


                baselineEmission.vehicle = vehicleArray;
                baselineEmission.year = year;
                baseEmission.push(baselineEmission);
                // console.log(baselineEmission)

            }
        }

        return baseEmission;
    }


    //AMS3-BC-Mapping------------------------------
    public assignParameter2(req: any, vehicleType: any, fueldata: any, fuelType: any, year: number) {
        // console.log("reqLength===", req.length)
        let baseEmission = new Array();
        let baselineEmission = new baselineDto;

        let x = Object.keys(vehicleType).length;
        let y = Object.keys(fuelType).length;

        if (x > y) {

            let vehicleArray = new Array();
            for (let vehi in vehicleType) {
                for (let fu in fuelType) {
                   let fuel = new fuelDto;
                    let vehicle = new vehicleDto;
                    for (let num in req) {
                        if (vehicleType[vehi] === req[num]['vehical'] && fuelType[fu] === req[num]['fuelType']) {
                            let value: number;
                            vehicle.name = req[num]['vehical'];
                            if (req[num]['vehical'] == "car" || req[num]['vehical'] == "ThreeWheel" || req[num]['vehical'] == "Motor Cycle") {

                                vehicle.type = 4;
                            }
                            else {
                                vehicle.type = 3;

                            }

                            (this.getValue(req[num], "beftkmixy") === -999) ? value = 1 : vehicle.beftkmixy = this.getValue(req[num], "beftkmixy");
                            (this.getValue(req[num], "altkmixy") === -999) ? value = 1 : vehicle.altkmixy = this.getValue(req[num], "altkmixy");
                            (this.getValue(req[num], "awblixy") === -999) ? value = 1 : vehicle.awblixy = this.getValue(req[num], "awblixy");
                            (this.getValue(req[num], "sfcblixy") === -999) ? value = 1 : vehicle.sfcblixy = this.getValue(req[num], "sfcblixy");//avgweightbyvehicle//totaldistancetravel
                            (this.getValue(req[num], "avgweightbyvehicle") === -999) ? value = 1 : vehicle.avgweightbyvehicle = this.getValue(req[num], "avgweightbyvehicle");
                            (this.getValue(req[num], "totaldistancetravel") === -999) ? value = 1 : vehicle.totaldistancetravel = this.getValue(req[num], "totaldistancetravel");


                            if (fuelType[fu] === req[num]["fuelType"] && fuelType[fu] === fueldata[fu]["type"] && fuelType[fu] != "Electricity") {
                                vehicle.fuel = fueldata[fu];
                            }
                        }


                    }
                    if (vehicle.type) {

                        vehicleArray.push(vehicle);
                    }
                }


                // console.log("varry====", vehicleArray)

            }
            baselineEmission.vehicle = vehicleArray;
            baselineEmission.year = year;
            baseEmission.push(baselineEmission);

        } else {//fuel>>>>>>>>>

            let vehicleArray = new Array();

            for (let fu in fuelType) {
                let fuel = new fuelDto;

                for (let vehi in vehicleType) {
                    let vehicle = new vehicleDto;

                    for (let num in req) {

                        if (vehicleType[vehi] === req[num]['vehical'] && fuelType[fu] === req[num]['fuelType']) {
                            let value: number;

                            if (req[num]['vehical'] == "car" || req[num]['vehical'] == "ThreeWheel" || req[num]['vehical'] == "Motor Cycle") {

                                vehicle.type = 4;
                            }
                            else {
                                vehicle.type = 3;

                            }
                            (this.getValue(req[num], "efco2xy") === -999) ? value = 1 : fuel.efco2xy = this.getValue(req[num], "efco2xy");
                            (this.getValue(req[num], "ncv") === -999) ? value = 1 : fuel.ncv = this.getValue(req[num], "ncv");
                            (this.getValue(req[num], "beftkmixy") === -999) ? value = 1 : vehicle.beftkmixy = this.getValue(req[num], "beftkmixy");
                            (this.getValue(req[num], "altkmixy") === -999) ? value = 1 : vehicle.altkmixy = this.getValue(req[num], "altkmixy");
                            (this.getValue(req[num], "awblixy") === -999) ? value = 1 : vehicle.awblixy = this.getValue(req[num], "awblixy");
                            (this.getValue(req[num], "sfcblixy") === -999) ? value = 1 : vehicle.sfcblixy = this.getValue(req[num], "sfcblixy");

                            if (fuelType[fu] === req[num]["fuelType"] && fuelType[fu] === fueldata[fu]["type"] && fuelType[fu] != "Electricity") {
                                vehicle.fuel = fueldata[fu];
                            }

                        }


                    }
                    vehicle.fuel = fuel;
                    vehicleArray.push(vehicle);

                }

                // console.log("varry====", vehicleArray)

                baselineEmission.vehicle = vehicleArray;
                baselineEmission.year = year;
                baseEmission.push(baselineEmission);

            }

        }
        return baseEmission;
    }
    //--------------------------------------------


    //AM0090-BaselineMapping---------------------------------
    public assignParameter_am0090(req: any, vehicleType: any, fuelType: any, year: number) {
        let baseEmission = new Array();
        let baselineEmission = new BaselineDtoAM0090;

        let x = Object.keys(vehicleType).length;
        let y = Object.keys(fuelType).length;

        if (Object.keys(vehicleType).length > Object.keys(fuelType).length) {

            let vehicleArray = new Array();
            //let fuelArray = new Array();
            for (let vehi in vehicleType) {
                console.log("v", vehicleType[vehi])

                let vehicle = new VehicleDtoAM0090;
                for (let fu in fuelType) {
                    let fuel = new FuelDtoAM0090;

                    for (let num in req) {

                        if (vehicleType[vehi] === req[num]['vehical'] && fuelType[fu] === req[num]['fuelType']) {
                            let value: number;
                            vehicle.type = req[num]['vehical'];


                            (this.getValue(req[num], "cdefault") === -999) ? value = 1 : baselineEmission.cdefault = this.getValue(req[num], "cdefault");
                            (this.getValue(req[num], "ad") === -999) ? value = 1 : baselineEmission.ad = this.getValue(req[num], "ad");
                            (this.getValue(req[num], "frtbl") === -999) ? value = 1 : baselineEmission.frtbl = this.getValue(req[num], "frtbl");
                            (this.getValue(req[num], "rtdx") === -999) ? value = 1 : baselineEmission.rtdx = this.getValue(req[num], "rtdx");
                            (this.getValue(req[num], "trtx") === -999) ? value = 1 : baselineEmission.trtx = this.getValue(req[num], "trtx");
                            (this.getValue(req[num], "tx") === -999) ? value = 1 : baselineEmission.tx = this.getValue(req[num], "tx");
                            (this.getValue(req[num], "ty") === -999) ? value = 1 : baselineEmission.ty = this.getValue(req[num], "ty");


                        }
                        if (fuelType[fu] === req[num]['fuelType']) {

                            let value: number;
                            fuel.type = req[num]['fuelType'];
                            (this.getValue(req[num], "coefiy") === -999) ? value = 1 : fuel.coefiy = this.getValue(req[num], "coefiy");
                            (this.getValue(req[num], "efco2") === -999) ? value = 1 : fuel.efco2 = this.getValue(req[num], "efco2");
                            (this.getValue(req[num], "efefjy") === -999) ? value = 1 : fuel.efefjy = this.getValue(req[num], "efefjy");
                            (this.getValue(req[num], "fcblix") === -999) ? value = 1 : fuel.fcblix = this.getValue(req[num], "fcblix");
                            (this.getValue(req[num], "fcijy") === -999) ? value = 1 : fuel.fcijy = this.getValue(req[num], "fcijy");
                            (this.getValue(req[num], "piy") === -999) ? value = 1 : fuel.piy = this.getValue(req[num], "piy");
                            (this.getValue(req[num], "wciy") === -999) ? value = 1 : fuel.wciy = this.getValue(req[num], "wciy");
                            (this.getValue(req[num], "tdljy") === -999) ? value = 1 : fuel.tdljy = this.getValue(req[num], "tdljy");
                            (this.getValue(req[num], "ncv") === -999) ? value = 1 : fuel.ncv = this.getValue(req[num], "ncv");
                        }



                    }
                    vehicle.fuel = fuel;
                    vehicleArray.push(vehicle);

                }


                console.log("varry====", vehicleArray)

                baselineEmission.vehicle = vehicleArray;

                baselineEmission.year = year;
                baseEmission.push(baselineEmission);
                // console.log(baselineEmission)
            }
            return baseEmission;

        }//fuel>>>>>>>>>>>>>>>>
        else {

            let vehicleArray = new Array();
            for (let fu in fuelType) {
                console.log("kkk", fu)
                let fuel = new FuelDtoAM0090;

                for (let vehi in vehicleType) {
                    console.log("v", vehicleType[vehi])
                    let vehicle = new VehicleDtoAM0090;



                    for (let num in req) {

                        if (vehicleType[vehi] === req[num]['vehical'] && fuelType[fu] === req[num]['fuelType']) {
                            let value: number;
                            vehicle.type = req[num]['vehical'];


                            (this.getValue(req[num], "cdefault") === -999) ? value = 1 : baselineEmission.cdefault = this.getValue(req[num], "cdefault");
                            (this.getValue(req[num], "ad") === -999) ? value = 1 : baselineEmission.ad = this.getValue(req[num], "ad");
                            (this.getValue(req[num], "frtbl") === -999) ? value = 1 : baselineEmission.frtbl = this.getValue(req[num], "frtbl");
                            (this.getValue(req[num], "rtdx") === -999) ? value = 1 : baselineEmission.rtdx = this.getValue(req[num], "rtdx");
                            (this.getValue(req[num], "trtx") === -999) ? value = 1 : baselineEmission.trtx = this.getValue(req[num], "trtx");
                            (this.getValue(req[num], "tx") === -999) ? value = 1 : baselineEmission.tx = this.getValue(req[num], "tx");
                            (this.getValue(req[num], "ty") === -999) ? value = 1 : baselineEmission.ty = this.getValue(req[num], "ty");


                        }
                        if (fuelType[fu] === req[num]['fuelType']) {

                            let value: number;
                            fuel.type = req[num]['fuelType'];
                            (this.getValue(req[num], "coefiy") === -999) ? value = 1 : fuel.coefiy = this.getValue(req[num], "coefiy");
                            (this.getValue(req[num], "efco2") === -999) ? value = 1 : fuel.efco2 = this.getValue(req[num], "efco2");
                            (this.getValue(req[num], "efefjy") === -999) ? value = 1 : fuel.efefjy = this.getValue(req[num], "efefjy");
                            (this.getValue(req[num], "fcblix") === -999) ? value = 1 : fuel.fcblix = this.getValue(req[num], "fcblix");
                            (this.getValue(req[num], "fcijy") === -999) ? value = 1 : fuel.fcijy = this.getValue(req[num], "fcijy");
                            (this.getValue(req[num], "piy") === -999) ? value = 1 : fuel.piy = this.getValue(req[num], "piy");
                            (this.getValue(req[num], "wciy") === -999) ? value = 1 : fuel.wciy = this.getValue(req[num], "wciy");
                            (this.getValue(req[num], "tdljy") === -999) ? value = 1 : fuel.tdljy = this.getValue(req[num], "tdljy");
                            (this.getValue(req[num], "ncv") === -999) ? value = 1 : fuel.ncv = this.getValue(req[num], "ncv");
                        }



                    }

                    vehicle.fuel = fuel;
                    vehicleArray.push(vehicle);

                }


                console.log("varry====", vehicleArray)
                baselineEmission.vehicle = vehicleArray;
                baselineEmission.year = year;

            }

            baseEmission.push(baselineEmission);

            return baseEmission;


        }
        // return baseEmission;
    }


    //AM0090-ProjectMapping-----------------------------
    public assignParameter_am0090_project(req: any, vehicleType: any, fuelType: any, year: number) {
        let projEmission = new Array();

        let projectEmission = new projectDtoAM0090;

        let x = Object.keys(vehicleType).length;
        let y = Object.keys(fuelType).length;

        if (Object.keys(vehicleType).length > Object.keys(fuelType).length) {
            console.log("fuel<<<<<<<<<<<<<<<<<<")

            let vehicleArray = new Array();

            for (let vehi in vehicleType) {
                console.log("v", vehicleType[vehi])

                let vehicle = new VehicleDtoAM0090;
                for (let fu in fuelType) {
                    let fuel = new FuelDtoAM0090;

                    for (let num in req) {

                        if (vehicleType[vehi] === req[num]['vehical'] && fuelType[fu] === req[num]['fuelType']) {
                            let value: number;
                            vehicle.type = req[num]['vehical'];
                            (this.getValue(req[num], "trty") === -999) ? value = 1 : projectEmission.trty = this.getValue(req[num], "trty");
                            (this.getValue(req[num], "ty") === -999) ? value = 1 : projectEmission.ty = this.getValue(req[num], "ty");


                        }
                        if (fuelType[fu] === req[num]['fuelType']) {

                            let value: number;
                            fuel.type = req[num]['fuelType'];

                            (this.getValue(req[num], "coefiy") === -999) ? value = 1 : fuel.coefiy = this.getValue(req[num], "coefiy");
                            (this.getValue(req[num], "efco2") === -999) ? value = 1 : fuel.efco2 = this.getValue(req[num], "efco2");
                            (this.getValue(req[num], "efefjy") === -999) ? value = 1 : fuel.efefjy = this.getValue(req[num], "efefjy");
                            (this.getValue(req[num], "fcblix") === -999) ? value = 1 : fuel.fcblix = this.getValue(req[num], "fcblix");
                            (this.getValue(req[num], "fcijy") === -999) ? value = 1 : fuel.fcijy = this.getValue(req[num], "fcijy");
                            (this.getValue(req[num], "piy") === -999) ? value = 1 : fuel.piy = this.getValue(req[num], "piy");
                            (this.getValue(req[num], "wciy") === -999) ? value = 1 : fuel.wciy = this.getValue(req[num], "wciy");
                            (this.getValue(req[num], "tdljy") === -999) ? value = 1 : fuel.tdljy = this.getValue(req[num], "tdljy");
                            (this.getValue(req[num], "ncv") === -999) ? value = 1 : fuel.ncv = this.getValue(req[num], "ncv");
                        }



                    }

                    vehicle.fuel = fuel;
                    vehicleArray.push(vehicle);

                }


                console.log("varry====", vehicleArray)


                projectEmission.vehicle = vehicleArray;

                projectEmission.year = year;
                projEmission.push(projectEmission);
                // console.log(baselineEmission)
            }
            return projEmission;
        }//fuel>>>>>>>>>>>>>>>>>>>>>>>>>
        else {

            console.log("fuel>>>>>>>>>>>>>>>>>>")
            let vehicleArray = new Array();

            for (let fu in fuelType) {
                console.log("aa", fuelType[fu])
                let fuel = new FuelDtoAM0090;

                for (let vehi in vehicleType) {
                    console.log("vee", vehicleType[vehi])
                    let vehicle = new VehicleDtoAM0090;

                    for (let num in req) {

                        if (vehicleType[vehi] === req[num]['vehical'] && fuelType[fu] === req[num]['fuelType']) {
                            let value: number;
                            vehicle.type = req[num]['vehical'];
                            (this.getValue(req[num], "trty") === -999) ? value = 1 : projectEmission.trty = this.getValue(req[num], "trty");
                            (this.getValue(req[num], "ty") === -999) ? value = 1 : projectEmission.ty = this.getValue(req[num], "ty");


                        }
                        if (fuelType[fu] === req[num]['fuelType']) {

                            let value: number;
                            fuel.type = req[num]['fuelType'];

                            (this.getValue(req[num], "coefiy") === -999) ? value = 1 : fuel.coefiy = this.getValue(req[num], "coefiy");
                            (this.getValue(req[num], "efco2") === -999) ? value = 1 : fuel.efco2 = this.getValue(req[num], "efco2");
                            (this.getValue(req[num], "efefjy") === -999) ? value = 1 : fuel.efefjy = this.getValue(req[num], "efefjy");
                            (this.getValue(req[num], "fcblix") === -999) ? value = 1 : fuel.fcblix = this.getValue(req[num], "fcblix");
                            (this.getValue(req[num], "fcijy") === -999) ? value = 1 : fuel.fcijy = this.getValue(req[num], "fcijy");
                            (this.getValue(req[num], "piy") === -999) ? value = 1 : fuel.piy = this.getValue(req[num], "piy");
                            (this.getValue(req[num], "wciy") === -999) ? value = 1 : fuel.wciy = this.getValue(req[num], "wciy");
                            (this.getValue(req[num], "tdljy") === -999) ? value = 1 : fuel.tdljy = this.getValue(req[num], "tdljy");
                            (this.getValue(req[num], "ncv") === -999) ? value = 1 : fuel.ncv = this.getValue(req[num], "ncv");
                        }

                    }

                    vehicle.fuel = fuel;
                    if (vehicle.type) {
                        vehicleArray.push(vehicle);
                    }

                }


                console.log("varry====", vehicleArray)


                projectEmission.vehicle = vehicleArray;

                projectEmission.year = year;
                // console.log(baselineEmission)
            }
            projEmission.push(projectEmission);

            return projEmission;



        }
        // return baseEmission;
    }
    //am0090-project




    //-----------AMC0016-BaseLineMapping-------------------
    public assignParameter_amc0016(req: any, vehicleType: any, fueldata:any, fuelType: any, year: number) {
        console.log("===========AMC0016-Basline================")
        let baseEmission = new Array();
        let baselineEmission = new BaselineDtoAMC0016;

        let x = Object.keys(vehicleType).length;
        let y = Object.keys(fuelType).length;

        if (x > y || (x == 1 && y == 1)|| (x == y)) {

            let vehicleArray = new Array();

            for (let vehi in vehicleType) {
                console.log("v", vehicleType[vehi])

                for (let fu in fuelType) {
                    console.log("fu", fuelType[fu])
                    let vehicle = new VehicleDtoAMC0016;

                    for (let num in req) {


                        if (vehicleType[vehi] === req[num]['vehical'] && fuelType[fu] === req[num]['fuelType']) {
                            let value: number;
                            vehicle.type = req[num]['vehical'];

                            (this.getValue(req[num], "efpkmix") === -999) ? value = 1 : vehicle.efpkmix = this.getValue(req[num], "efpkmix");
                            (this.getValue(req[num], "efkmi1_4") === -999) ? value = 1 : vehicle.efkmi1_4 = this.getValue(req[num], "efkmi1_4");
                            (this.getValue(req[num], "si") === -999) ? value = 1 : vehicle.si = this.getValue(req[num], "si");
                            (this.getValue(req[num], "di") === -999) ? value = 1 : vehicle.di = this.getValue(req[num], "di");
                            (this.getValue(req[num], "sdi") === -999) ? value = 1 : vehicle.sdi = this.getValue(req[num], "sdi");
                            (this.getValue(req[num], "iri") === -999) ? value = 1 : vehicle.iri = this.getValue(req[num], "iri");
                            (this.getValue(req[num], "ocix") === -999) ? value = 1 : vehicle.ocix = this.getValue(req[num], "ocix");
                            (this.getValue(req[num], "nix") === -999) ? value = 1 : vehicle.nix = this.getValue(req[num], "nix");
                            (this.getValue(req[num], "t") === -999) ? value = 1 : vehicle.t = this.getValue(req[num], "t");
                            (this.getValue(req[num], "ninx") === -999) ? value = 1 : vehicle.ninx = this.getValue(req[num], "ninx");
                            (this.getValue(req[num], "sfcinx") === -999) ? value = 1 : vehicle.sfcinx = this.getValue(req[num], "sfcinx");
                            (this.getValue(req[num], "nzx") === -999) ? value = 1 : vehicle.nzx = this.getValue(req[num], "nzx");
                            (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");
                            (this.getValue(req[num], "cv") === -999) ? value = 1 : vehicle.cv = this.getValue(req[num], "cv");
                            (this.getValue(req[num], "v") === -999) ? value = 1 : vehicle.v = this.getValue(req[num], "v");


                            (this.getValue(req[num], "pelix") === -999) ? value = 1 : vehicle.pelix = this.getValue(req[num], "pelix");
                            (this.getValue(req[num], "delix") === -999) ? value = 1 : vehicle.delix = this.getValue(req[num], "delix");


                            if (fuelType[fu] === req[num]["fuelType"] && fuelType[fu] === fueldata[fu]["type"] && fuelType[fu] != "Electricity") {
                                vehicle.fuel = fueldata[fu];
                            }

                        }

                    }
                  //  vehicle.fuel = fuel;
                    vehicleArray.push(vehicle);

                }


                console.log("varry====", vehicleArray)

                baselineEmission.vehicle = vehicleArray;

                baselineEmission.year = year;
                console.log("baselineObj===", baselineEmission)

                // console.log(baselineEmission)
            }
            baseEmission.push(baselineEmission);

            return baseEmission;

        } else {//fuel>>>>>>>>>>>>>>>>>
            console.log("fuel>>>>>>>>>>")

            let vehicleArray = new Array();
            for (let fu in fuelType) {
                console.log("fu", fu)
                let fuel = new FuelDtoAMC0016;

                for (let vehi in vehicleType) {
                    console.log("v", vehicleType[vehi])
                    let vehicle = new VehicleDtoAMC0016;

                    for (let num in req) {

                        if (vehicleType[vehi] === req[num]['vehical'] && fuelType[fu] === req[num]['fuelType']) {
                            let value: number;
                            vehicle.type = req[num]['vehical'];

                            (this.getValue(req[num], "efpkmix") === -999) ? value = 1 : vehicle.efpkmix = this.getValue(req[num], "efpkmix");
                            (this.getValue(req[num], "efkmi1_4") === -999) ? value = 1 : vehicle.efkmi1_4 = this.getValue(req[num], "efkmi1_4");
                            (this.getValue(req[num], "si") === -999) ? value = 1 : vehicle.si = this.getValue(req[num], "si");
                            (this.getValue(req[num], "di") === -999) ? value = 1 : vehicle.di = this.getValue(req[num], "di");
                            (this.getValue(req[num], "sdi") === -999) ? value = 1 : vehicle.sdi = this.getValue(req[num], "sdi");
                            (this.getValue(req[num], "iri") === -999) ? value = 1 : vehicle.iri = this.getValue(req[num], "iri");
                            (this.getValue(req[num], "ocix") === -999) ? value = 1 : vehicle.ocix = this.getValue(req[num], "ocix");
                            (this.getValue(req[num], "nix") === -999) ? value = 1 : vehicle.nix = this.getValue(req[num], "nix");
                            (this.getValue(req[num], "t") === -999) ? value = 1 : vehicle.t = this.getValue(req[num], "t");

                            (this.getValue(req[num], "nzx") === -999) ? value = 1 : vehicle.nzx = this.getValue(req[num], "nzx");
                            (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");
                            (this.getValue(req[num], "cv") === -999) ? value = 1 : vehicle.cv = this.getValue(req[num], "cv");

                            (this.getValue(req[num], "ninx") === -999) ? value = 1 : vehicle.ninx = this.getValue(req[num], "ninx");
                            (this.getValue(req[num], "sfcinx") === -999) ? value = 1 : vehicle.sfcinx = this.getValue(req[num], "sfcinx");
                            (this.getValue(req[num], "v") === -999) ? value = 1 : vehicle.v = this.getValue(req[num], "v");

                            (this.getValue(req[num], "pelix") === -999) ? value = 1 : vehicle.pelix = this.getValue(req[num], "pelix");
                            (this.getValue(req[num], "delix") === -999) ? value = 1 : vehicle.delix = this.getValue(req[num], "delix");
                            
                            if (fuelType[fu] === req[num]["fuelType"] && fuelType[fu] === fueldata[fu]["type"] ) {
                                vehicle.fuel = fueldata[fu];
                            }

                        }

                    }

                    vehicle.fuel = fuel;
                    if (vehicle.type) {
                        vehicleArray.push(vehicle);
                    }

                }


                console.log("varry====", vehicleArray)
                baselineEmission.vehicle = vehicleArray;
                baselineEmission.year = year;

            }

            baseEmission.push(baselineEmission);

            return baseEmission;


        }

    }



    //-----------AMC0016-ProjectMapping-------------------
    public vehicleDataProject(req: any, vehicleType: any, fueldata:any, fuelType:any, year: number) {
        console.log("===========AMC0016-Project================")
        let projEmission = new Array();
        let projectEmission = new ProjectDtoAMC0016;

        let x = Object.keys(vehicleType).length;
        let y = Object.keys(fuelType).length;

        if (x > y || (x == 1 && y == 1) || x == y) {

            let vehicleArray = new Array();

            for (let vehi in vehicleType) {
                console.log("v", vehicleType[vehi])

                for (let fu in fuelType) {
                    console.log("fu", fuelType[fu])
                    let vehicle = new VehicleDtoAMC0016;

                   // let fuel = new FuelDtoAMC0016;

                    for (let num in req) {
                        //---common section---
                        let value: number;
                        (this.getValue(req[num], "gwpch4") === -999) ? value = 1 : projectEmission.gwpch4 = this.getValue(req[num], "gwpch4");


                        if (vehicleType[vehi] === req[num]['vehical'] && fuelType[fu] === req[num]['fuelType']) {
                            let value: number;
                            vehicle.type = req[num]['vehical'];

                            (this.getValue(req[num], "efkmzy") === -999) ? value = 1 : vehicle.efkmzy = this.getValue(req[num], "efkmzy");
                            (this.getValue(req[num], "efkmix") === -999) ? value = 1 : vehicle.efkmix = this.getValue(req[num], "efkmix");
                            (this.getValue(req[num], "p") === -999) ? value = 1 : vehicle.p = this.getValue(req[num], "p");
                            (this.getValue(req[num], "ddzy") === -999) ? value = 1 : vehicle.ddzy = this.getValue(req[num], "ddzy");

                            (this.getValue(req[num], "fcpjny") === -999) ? value = 1 : vehicle.fcpjny = this.getValue(req[num], "fcpjny");
                            (this.getValue(req[num], "sfczny") === -999) ? value = 1 : vehicle.sfczny = this.getValue(req[num], "sfczny");
                            (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");
                            (this.getValue(req[num], "cv") === -999) ? value = 1 : vehicle.cv = this.getValue(req[num], "cv");

                            (this.getValue(req[num], "nisy") === -999) ? value = 1 : vehicle.nisy = this.getValue(req[num], "nisy");
                            (this.getValue(req[num], "ms") === -999) ? value = 1 : vehicle.ms = this.getValue(req[num], "ms");
                            (this.getValue(req[num], "nzx") === -999) ? value = 1 : vehicle.nzx = this.getValue(req[num], "nzx");


                            if (fuelType[fu] === req[num]["fuelType"] && fuelType[fu] === fueldata[fu]["type"] ) {
                                vehicle.fuel = fueldata[fu];
                            }

                        }
            
                    }
                    if (vehicle.type) {

                        vehicleArray.push(vehicle);
                    }

                }

            }

            return vehicleArray;

        } else {//fuel>>>>>>>>>>>>


            let vehicleArray = new Array();

            for (let fu in fuelType) {
                console.log("fu", fuelType[fu])

                let fuel = new FuelDtoAMC0016;

                for (let vehi in vehicleType) {
                    console.log("v", vehicleType[vehi])

                    let vehicle = new VehicleDtoAMC0016;


                    for (let num in req) {
                        //---common section---
                        let value: number;
                        (this.getValue(req[num], "gwpch4") === -999) ? value = 1 : projectEmission.gwpch4 = this.getValue(req[num], "gwpch4");
                        (this.getValue(req[num], "py") === -999) ? value = 1 : projectEmission.py = this.getValue(req[num], "py");



                        if (vehicleType[vehi] === req[num]['vehical'] && fuelType[fu] === req[num]['fuelType']) {
                            let value: number;
                            vehicle.type = req[num]['vehical'];

                            (this.getValue(req[num], "efkmzy") === -999) ? value = 1 : vehicle.efpkmix = this.getValue(req[num], "efpkmix");
                            (this.getValue(req[num], "efkmix") === -999) ? value = 1 : vehicle.efkmix = this.getValue(req[num], "efkmix");
                            (this.getValue(req[num], "p") === -999) ? value = 1 : vehicle.p = this.getValue(req[num], "p");


                            (this.getValue(req[num], "ddzy") === -999) ? value = 1 : vehicle.ddzy = this.getValue(req[num], "ddzy");
                            (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");
                            (this.getValue(req[num], "cv") === -999) ? value = 1 : vehicle.cv = this.getValue(req[num], "cv");
                            (this.getValue(req[num], "nisy") === -999) ? value = 1 : vehicle.nisy = this.getValue(req[num], "nisy");
                            (this.getValue(req[num], "ms") === -999) ? value = 1 : vehicle.ms = this.getValue(req[num], "ms");
                            (this.getValue(req[num], "fcpjny") === -999) ? value = 1 : vehicle.fcpjny = this.getValue(req[num], "fcpjny");
                            (this.getValue(req[num], "sfczny") === -999) ? value = 1 : vehicle.sfczny = this.getValue(req[num], "sfczny");
                            (this.getValue(req[num], "nzx") === -999) ? value = 1 : vehicle.nzx = this.getValue(req[num], "nzx");

                            
                            if (fuelType[fu] === req[num]["fuelType"] && fuelType[fu] === fueldata[fu]["type"] ) {
                                vehicle.fuel = fueldata[fu];
                            }
                        }
                    
                    }
                    if (vehicle.type) {

                        vehicleArray.push(vehicle);
                    }

                }

            }

            return vehicleArray;

        }
    }


    public assignParameter_amc0016_leakage(req: any, vehicleType: any, fuelType: any, year: number) {
        console.log("===========AMC0016-Leakage================")
        let leakEmission = new Array();
        let leakageEmission = new LeakageDtoAMC0016;

        let x = Object.keys(vehicleType).length;
        let y = Object.keys(fuelType).length;

        if (x > y || (x == 1 && y == 1)) {

            let vehicleArray = new Array();

            for (let vehi in vehicleType) {
                console.log("v", vehicleType[vehi])

                let vehicle = new VehicleDtoAMC0016;
                for (let fu in fuelType) {
                    console.log("fu", fuelType[fu])

                    let fuel = new FuelDtoAMC0016;

                    for (let num in req) {
                        //---common section---
                        let value: number;
                        (this.getValue(req[num], "srsx") === -999) ? value = 1 : leakageEmission.srsx = this.getValue(req[num], "srsx");
                        (this.getValue(req[num], "arsy") === -999) ? value = 1 : leakageEmission.arsy = this.getValue(req[num], "arsy");
                        (this.getValue(req[num], "bscry") === -999) ? value = 1 : leakageEmission.bscry = this.getValue(req[num], "bscry");
                        (this.getValue(req[num], "nzx") === -999) ? value = 1 : leakageEmission.nzx = this.getValue(req[num], "nzx");
                        (this.getValue(req[num], "py") === -999) ? value = 1 : leakageEmission.py = this.getValue(req[num], "py");
                        (this.getValue(req[num], "rsx") === -999) ? value = 1 : leakageEmission.rsx = this.getValue(req[num], "rsx");
                        (this.getValue(req[num], "rsy") === -999) ? value = 1 : leakageEmission.rsy = this.getValue(req[num], "rsy");
                        (this.getValue(req[num], "tdbx") === -999) ? value = 1 : leakageEmission.tdbx = this.getValue(req[num], "tdbx");
                        (this.getValue(req[num], "tdcx") === -999) ? value = 1 : leakageEmission.tdcx = this.getValue(req[num], "tdcx");
                        (this.getValue(req[num], "tdtx") === -999) ? value = 1 : leakageEmission.tdtx = this.getValue(req[num], "tdtx");


                        if (vehicleType[vehi] === req[num]['vehical'] && fuelType[fu] === req[num]['fuelType']) {
                            let value: number;
                            vehicle.type = req[num]['vehical'];

                            (this.getValue(req[num], "adz") === -999) ? value = 1 : vehicle.adz = this.getValue(req[num], "adz");
                            (this.getValue(req[num], "ddzsx") === -999) ? value = 1 : vehicle.ddzsx = this.getValue(req[num], "ddzsx");
                            (this.getValue(req[num], "nzsx") === -999) ? value = 1 : vehicle.nzsx = this.getValue(req[num], "nzsx");
                            (this.getValue(req[num], "rocz1_4") === -999) ? value = 1 : vehicle.rocz1_4 = this.getValue(req[num], "rocz1_4");
                            (this.getValue(req[num], "oczt1_4") === -999) ? value = 1 : vehicle.oczt1_4 = this.getValue(req[num], "oczt1_4");
                            (this.getValue(req[num], "cvzt1_4") === -999) ? value = 1 : vehicle.cvzt1_4 = this.getValue(req[num], "cvzt1_4");
                            (this.getValue(req[num], "roczx") === -999) ? value = 1 : vehicle.roczx = this.getValue(req[num], "roczx");
                            (this.getValue(req[num], "oczt") === -999) ? value = 1 : vehicle.oczt = this.getValue(req[num], "oczt");
                            (this.getValue(req[num], "cvzt") === -999) ? value = 1 : vehicle.cvzt = this.getValue(req[num], "cvzt");
                            (this.getValue(req[num], "efpkmix") === -999) ? value = 1 : vehicle.efpkmix = this.getValue(req[num], "efpkmix");
                            (this.getValue(req[num], "efkmi1_4") === -999) ? value = 1 : vehicle.efkmi1_4 = this.getValue(req[num], "efkmi1_4");
                            (this.getValue(req[num], "nimsy") === -999) ? value = 1 : vehicle.nimsy = this.getValue(req[num], "nimsy");
                            (this.getValue(req[num], "msi1_4") === -999) ? value = 1 : vehicle.msi1_4 = this.getValue(req[num], "msi1_4");
                            (this.getValue(req[num], "ocix") === -999) ? value = 1 : vehicle.ocix = this.getValue(req[num], "ocix");
                            (this.getValue(req[num], "tdi1_4") === -999) ? value = 1 : vehicle.tdi1_4 = this.getValue(req[num], "tdi1_4");
                            (this.getValue(req[num], "ni1_4") === -999) ? value = 1 : vehicle.ni1_4 = this.getValue(req[num], "ni1_4");
                            //ni1_4_a
                            (this.getValue(req[num], "ni1_4_a") === -999) ? value = 1 : vehicle.ni1_4_a = this.getValue(req[num], "ni1_4_a");


                            (this.getValue(req[num], "nix") === -999) ? value = 1 : vehicle.nix = this.getValue(req[num], "nix");
                            (this.getValue(req[num], "efkmvpi1_4") === -999) ? value = 1 : vehicle.efkmvpi1_4 = this.getValue(req[num], "efkmvpi1_4");
                            (this.getValue(req[num], "efkmvbi") === -999) ? value = 1 : vehicle.efkmvbi = this.getValue(req[num], "efkmvbi");


                        }
                        if (fuelType[fu] === req[num]['fuelType']) {

                            let value: number;
                            fuel.type = req[num]['fuelType'];
                            //no need fuel

                        }



                    }
                    vehicle.fuel = fuel;
                    vehicleArray.push(vehicle);

                }


                console.log("varry====", vehicleArray)

                leakageEmission.vehicle = vehicleArray;

                leakageEmission.year = year;
                console.log("projectObj===", leakageEmission)

                // console.log(baselineEmission)
            }
            leakEmission.push(leakageEmission);

            return leakEmission;

        } else { }
    }


    public assignParameterJicaProject(req: any, trafic: any, fueldata: any, year: number, meth: string) {
        let projectEmission = new Array();
        let project = new ProjectDto();
        for (let num in req) {
            var value: number;

            project.year = year;
            (req[num]['fuelType'] === "Electricity") ? project.vehicle_type = VehicleTypeEnum.electric_vehicle : project.vehicle_type = VehicleTypeEnum.fuel_vehicle;
            (meth === "jica_tcm_ms_p_v_3") ? project.projectEmissonType = ProjectEmissionTypeEnum.model_shift : project.projectEmissonType = ProjectEmissionTypeEnum.traffic_congestion_mitigation;

            (this.getValue(req[num], "ec") === -999) ? value = 1 : project.ec = this.getValue(req[num], "ec");
            (this.getValue(req[num], "ef") === -999) ? value = 1 : project.ef = this.getValue(req[num], "ef");
            (this.getValue(req[num], "sfc") === -999) ? value = 1 : project.sfc = this.getValue(req[num], "sfc");
            (this.getValue(req[num], "btdp") === -999) ? value = 1 : project.btdp = this.getValue(req[num], "btdp");
            (this.getValue(req[num], "distance") === -999) ? project.distance = 0 : project.distance = this.getValue(req[num], "distance");
            (this.getValue(req[num], "passenger") === -999) ? value = 1 : project.passenger = this.getValue(req[num], "passenger");

            if (req[num]['fuelType'] === "Electricity") {
                (this.getValue(req[num], "fc") === -999) ? value = 1 : project.ec = this.getValue(req[num], "fc")
            }
        }


        project.fc = fueldata;
        project.traficCon = trafic;
        projectEmission.push(project);
        return projectEmission;
    }

    public assignParameterICATbaseline(req: any, fueldata: any) {
        var baseEmission = new Array();
        var baselineEmission = new BaselineDtoICAT;

        var vehicleArray = new Array();

        for (let fu in fueldata) {
            var fuel = new FuelDtoICAT;
            var elec = new ElectricityDto;
            var vehicle = new VehicleDtoICAT;
            for (let num in req) {
                if (fueldata[fu] === req[num]['fuelType'] || req[num]['fuelType'] === "Common") {
                    var value: number;


                    (this.getValue(req[num], "ef") === -999) ? value = 1 : fuel.ef = this.getValue(req[num], "ef");
                    (this.getValue(req[num], "used_weight") === -999) ? value = 1 : fuel.used_weight = this.getValue(req[num], "used_weight");
                    (this.getValue(req[num], "used_liters") === -999) ? value = 1 : fuel.used_liters = this.getValue(req[num], "used_liters");
                    (this.getValue(req[num], "density") === -999) ? value = 1 : fuel.density = this.getValue(req[num], "density");
                    (this.getValue(req[num], "ncv") === -999) ? value = 1 : fuel.ncv = this.getValue(req[num], "ncv");
                    (this.getValue(req[num], "priceElasticity") === -999) ? value = 1 : fuel.priceElasticity = this.getValue(req[num], "priceElasticity");
                    (this.getValue(req[num], "priceIncrease") === -999) ? value = 1 : fuel.priceIncrease = this.getValue(req[num], "priceIncrease");
                    (this.getValue(req[num], "fuelPrice") === -999) ? value = 1 : fuel.fuelPrice = this.getValue(req[num], "fuelPrice");
                    (this.getValue(req[num], "vkt") === -999) ? value = 1 : fuel.vkt = this.getValue(req[num], "vkt");
                    (this.getValue(req[num], "sfc") === -999) ? value = 1 : fuel.sfc = this.getValue(req[num], "sfc");
                    (this.getValue(req[num], "fc") === -999) ? value = 1 : fuel.fc = this.getValue(req[num], "fc");


                    (this.getValue(req[num], "fuelShare") === -999) ? value = 1 : fuel.fuelShare = this.getValue(req[num], "fuelShare");
                    (this.getValue(req[num], "fuelUsed") === -999) ? value = 1 : baselineEmission.fuelUsed = this.getValue(req[num], "fuelUsed");

                    // (req[num]['fuelType'] === "Electricity") ? vehicle.vehicleType = 2 : vehicle.vehicleType = 1;
                }
            }
            vehicle.fuel = fuel;
            vehicleArray.push(vehicle);
        }
        baselineEmission.vehicle = vehicleArray;

        return baselineEmission;


    }
    public assignParameterICATproject(req: any, year: number, fuel: any) {
        var projectEmission = new ProjectDtoICAT;
        var special = new SpecialValueDto();
        var priceElasticity = new PriceElasticityDto();
        (this.getValueString(req[0]) === "-999") ? value = 1 : special.countryCode = this.getValueString(req[0]);
        for (let num in req) {
            var value: number;
            (this.getValue(req[num], "fuelMixPriceElasticity") === -999) ? value = 1 : projectEmission.fuelMixPriceElasticity = this.getValue(req[num], "fuelMixPriceElasticity");
            (this.getValue(req[num], "fuelMixPriceIncrease") === -999) ? value = 1 : projectEmission.fuelMixPriceIncrease = this.getValue(req[num], "fuelMixPriceIncrease");

            (this.getValue(req[num], "mixFuelPrice") === -999) ? value = 1 : priceElasticity.mixFuelPrice = this.getValue(req[num], "mixFuelPrice");
            (this.getValue(req[num], "capitalIncome") === -999) ? value = 1 : priceElasticity.capitalIncome = this.getValue(req[num], "capitalIncome");
            (this.getValue(req[num], "toilIncrease") === -999) ? value = 1 : special.toilIncrease = this.getValue(req[num], "toilIncrease");
            (this.getValue(req[num], "existingToil") === -999) ? value = 1 : special.existingToil = this.getValue(req[num], "existingToil");
            (this.getValue(req[num], "beta") === -999) ? value = 1 : special.beta = this.getValue(req[num], "beta");
            special.year = year;//this.getValue(req[num], "year");

        }

        projectEmission.fuel = fuel
        special.priceElasticity = priceElasticity;
        projectEmission.special = special;
        return projectEmission;
    }

    public assignParameetejiCA(req: any, vehicledata: any, fueldata: any, fuelType: any, year: number) {
        var data = new Array();

    }
    public assignParameterICATSim(req: any, vehicleType: any, fueldata: any, fuelType: any, year: number) {
        let baselineEmission = new ProjectDtoICAT;
        let vehicleArray = new Array();
        let elec = new ElectricityDto;

        let x = Object.keys(vehicleType).length;
        let y = Object.keys(fuelType).length;

        if (Object.keys(vehicleType).length > Object.keys(fuelType).length) {
            for (let vehi in vehicleType) {

                for (let fu in fuelType) {
                    let vehicle = new VehicleDtoICAT;
                    for (let num in req) {
                        let value: number;
                        (this.getValue(req[num], "beta") === -999) ? baselineEmission.beta = 0.03 : baselineEmission.beta = this.getValue(req[num], "beta");

                        if (vehicleType[vehi] === req[num]["vehical"]) {
                            (this.getValue(req[num], "percentageReduction") === -999) ? value = 1 : vehicle.percentageReduction = this.getValue(req[num], "percentageReduction");
                        }
                        if (vehicleType[vehi] === req[num]["vehical"] && fuelType[fu] === req[num]["fuelType"]) {
                            // console.log(req[num]["vehical"])
                            vehicle.vehicleType = req[num]["vehical"];
                            (this.getValue(req[num], "n") === -999) ? value = 1 : vehicle.n = this.getValue(req[num], "n");
                            (this.getValue(req[num], "distance") === -999) ? value = 1 : vehicle.distance = this.getValue(req[num], "distance");
                            (this.getValue(req[num], "fuelEconomy") === -999) ? value = 1 : vehicle.fuelEconomy = this.getValue(req[num], "fuelEconomy");
                            (this.getValue(req[num], "newTax") === -999) ? value = 1 : vehicle.newTax = this.getValue(req[num], "newTax");
                            (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");
                            (this.getValue(req[num], "percentageReduction") === -999) ? value = 1 : vehicle.percentageReduction = this.getValue(req[num], "percentageReduction");
                            (this.getValue(req[num], "prevuiousTax") === -999) ? value = 1 : vehicle.prevuiousTax = this.getValue(req[num], "prevuiousTax");
                            (this.getValue(req[num], "price") === -999) ? value = 1 : vehicle.price = this.getValue(req[num], "price");
                            (this.getValue(req[num], "vahicleSale") === -999) ? value = 1 : vehicle.vahicleSale = this.getValue(req[num], "vahicleSale");
                            // (this.getValue(req[num], "pkm") === -999) ? value = 1 : baselineEmission.pkm = this.getValue(req[num], "pkm");


                            if (fuelType[fu] === req[num]["fuelType"] && fuelType[fu] === fueldata[fu]["type"] && fuelType[fu] != "Electricity") {
                                vehicle.fuel = fueldata[fu];
                            }
                            else {
                                vehicle.electricity = fueldata[fu];
                            }
                        }
                    }
                    vehicleArray.push(vehicle);
                }

                baselineEmission.vehicle = vehicleArray;
            }


        }
        else if (Object.keys(vehicleType).length == Object.keys(fuelType).length) {
            for (let fu in fuelType) {
                // for (let vehi in vehicleType) {
                let vehicle = new VehicleDtoICAT;
                for (let num in req) {
                    let value: number;
                    (this.getValue(req[num], "beta") === -999) ? baselineEmission.beta = 0.03 : baselineEmission.beta = this.getValue(req[num], "beta");

                    if (vehicleType[fu] === req[num]["vehical"]) {
                        (this.getValue(req[num], "percentageReduction") === -999) ? value = 1 : vehicle.percentageReduction = this.getValue(req[num], "percentageReduction");
                    }

                    if (vehicleType[fu] === req[num]["vehical"] && fuelType[fu] === req[num]["fuelType"]) {
                        // console.log(req[num]["vehical"])
                        vehicle.vehicleType = req[num]["vehical"];
                        (this.getValue(req[num], "distance") === -999) ? value = 1 : vehicle.distance = this.getValue(req[num], "distance");
                        (this.getValue(req[num], "fuelEconomy") === -999) ? value = 1 : vehicle.fuelEconomy = this.getValue(req[num], "fuelEconomy");
                        (this.getValue(req[num], "newTax") === -999) ? value = 1 : vehicle.newTax = this.getValue(req[num], "newTax");
                        (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");

                        (this.getValue(req[num], "prevuiousTax") === -999) ? value = 1 : vehicle.prevuiousTax = this.getValue(req[num], "prevuiousTax");
                        (this.getValue(req[num], "price") === -999) ? value = 1 : vehicle.price = this.getValue(req[num], "price");
                        (this.getValue(req[num], "vahicleSale") === -999) ? value = 1 : vehicle.vahicleSale = this.getValue(req[num], "vahicleSale");
                        (this.getValue(req[num], "n") === -999) ? value = 1 : vehicle.n = this.getValue(req[num], "n");
                        // (this.getValue(req[num], "pkm") === -999) ? value = 1 : baselineEmission.pkm = this.getValue(req[num], "pkm");

                        if (fuelType[fu] === req[num]["fuelType"] && fuelType[fu] === fueldata[fu]["type"]) {
                            vehicle.fuel = fueldata[fu];
                        }
                        // else {
                        //     vehicle.electricity = fueldata[fu];

                        // }
                    }
                }
                vehicleArray.push(vehicle);
                console.log(vehicle)


                baselineEmission.vehicle = vehicleArray;
            }
        }
        else {
            for (let fu in fuelType) {
                for (let vehi in vehicleType) {
                    let vehicle = new VehicleDtoICAT;
                    for (let num in req) {
                        let value: number;
                        (this.getValue(req[num], "beta") === -999) ? baselineEmission.beta = 0.03 : baselineEmission.beta = this.getValue(req[num], "beta");

                        if (vehicleType[vehi] === req[num]["vehical"]) {
                            (this.getValue(req[num], "percentageReduction") === -999) ? value = 1 : vehicle.percentageReduction = this.getValue(req[num], "percentageReduction");
                        }

                        if (vehicleType[vehi] === req[num]["vehical"] && fuelType[fu] === req[num]["fuelType"]) {
                            // console.log(req[num]["vehical"])
                            vehicle.vehicleType = req[num]["vehical"];
                            (this.getValue(req[num], "distance") === -999) ? value = 1 : vehicle.distance = this.getValue(req[num], "distance");
                            (this.getValue(req[num], "fuelEconomy") === -999) ? value = 1 : vehicle.fuelEconomy = this.getValue(req[num], "fuelEconomy");
                            (this.getValue(req[num], "newTax") === -999) ? value = 1 : vehicle.newTax = this.getValue(req[num], "newTax");
                            (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");

                            (this.getValue(req[num], "prevuiousTax") === -999) ? value = 1 : vehicle.prevuiousTax = this.getValue(req[num], "prevuiousTax");
                            (this.getValue(req[num], "price") === -999) ? value = 1 : vehicle.price = this.getValue(req[num], "price");
                            (this.getValue(req[num], "vahicleSale") === -999) ? value = 1 : vehicle.vahicleSale = this.getValue(req[num], "vahicleSale");
                            (this.getValue(req[num], "n") === -999) ? value = 1 : vehicle.n = this.getValue(req[num], "n");
                            // (this.getValue(req[num], "pkm") === -999) ? value = 1 : baselineEmission.pkm = this.getValue(req[num], "pkm");

                            if (fuelType[fu] === req[num]["fuelType"] && fuelType[fu] === fueldata[fu]["type"]) {
                                vehicle.fuel = fueldata[fu];
                            }
                            // else {
                            //     vehicle.electricity = fueldata[fu];

                            // }
                        }
                    }
                    vehicleArray.push(vehicle);
                    console.log(vehicle)
                }

                baselineEmission.vehicle = vehicleArray;
            }
        }


        // baselineEmission.electricity = elec;
        // baselineEmission.vehicle =vehicleArray;
        return baselineEmission;
    }

    public assignParameterICAT(req: any, vehicleType: any, fueldata: any, fuelType: any, year: number) {
        let baselineEmission = new BaselineDtoICAT;
        let vehicleArray = new Array();
        let elec = new ElectricityDto;

        let x = Object.keys(vehicleType).length;
        let y = Object.keys(fuelType).length;

        if (Object.keys(vehicleType).length > Object.keys(fuelType).length) {
            for (let vehi in vehicleType) {

                for (let fu in fuelType) {
                    let vehicle = new VehicleDtoICAT;
                    for (let num in req) {
                        let value: number;
                        (this.getValue(req[num], "beta") === -999) ? baselineEmission.beta = 0.03 : baselineEmission.beta = this.getValue(req[num], "beta");

                        if (vehicleType[vehi] === req[num]["vehical"]) {
                            (this.getValue(req[num], "percentageReduction") === -999) ? value = 1 : vehicle.percentageReduction = this.getValue(req[num], "percentageReduction");
                        }
                        if (vehicleType[vehi] === req[num]["vehical"] && fuelType[fu] === req[num]["fuelType"]) {
                            // console.log(req[num]["vehical"])
                            vehicle.vehicleType = req[num]["vehical"];
                            (this.getValue(req[num], "n") === -999) ? value = 1 : vehicle.n = this.getValue(req[num], "n");
                            (this.getValue(req[num], "distance") === -999) ? value = 1 : vehicle.distance = this.getValue(req[num], "distance");
                            (this.getValue(req[num], "fuelEconomy") === -999) ? value = 1 : vehicle.fuelEconomy = this.getValue(req[num], "fuelEconomy");
                            (this.getValue(req[num], "newTax") === -999) ? value = 1 : vehicle.newTax = this.getValue(req[num], "newTax");
                            (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");
                            (this.getValue(req[num], "percentageReduction") === -999) ? value = 1 : vehicle.percentageReduction = this.getValue(req[num], "percentageReduction");
                            (this.getValue(req[num], "prevuiousTax") === -999) ? value = 1 : vehicle.prevuiousTax = this.getValue(req[num], "prevuiousTax");
                            (this.getValue(req[num], "price") === -999) ? value = 1 : vehicle.price = this.getValue(req[num], "price");
                            (this.getValue(req[num], "vahicleSale") === -999) ? value = 1 : vehicle.vahicleSale = this.getValue(req[num], "vahicleSale");
                            (this.getValue(req[num], "pkm") === -999) ? value = 1 : baselineEmission.pkm = this.getValue(req[num], "pkm");


                            if (fuelType[fu] === req[num]["fuelType"] && fuelType[fu] === fueldata[fu]["type"] && fuelType[fu] != "Electricity") {
                                vehicle.fuel = fueldata[fu];
                            }
                            else {
                                vehicle.electricity = fueldata[fu];
                            }
                        }
                    }
                    vehicleArray.push(vehicle);
                }

                baselineEmission.vehicle = vehicleArray;
            }


        }
        else if (Object.keys(vehicleType).length == Object.keys(fuelType).length) {
            for (let fu in fuelType) {
                // for (let vehi in vehicleType) {
                let vehicle = new VehicleDtoICAT;
                for (let num in req) {
                    let value: number;
                    if (vehicleType[fu] === req[num]["vehical"]) {
                        (this.getValue(req[num], "percentageReduction") === -999) ? value = 1 : vehicle.percentageReduction = this.getValue(req[num], "percentageReduction");
                    }

                    if (vehicleType[fu] === req[num]["vehical"] && fuelType[fu] === req[num]["fuelType"]) {
                        // console.log(req[num]["vehical"])
                        vehicle.vehicleType = req[num]["vehical"];
                        (this.getValue(req[num], "distance") === -999) ? value = 1 : vehicle.distance = this.getValue(req[num], "distance");
                        (this.getValue(req[num], "fuelEconomy") === -999) ? value = 1 : vehicle.fuelEconomy = this.getValue(req[num], "fuelEconomy");
                        (this.getValue(req[num], "newTax") === -999) ? value = 1 : vehicle.newTax = this.getValue(req[num], "newTax");
                        (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");

                        (this.getValue(req[num], "prevuiousTax") === -999) ? value = 1 : vehicle.prevuiousTax = this.getValue(req[num], "prevuiousTax");
                        (this.getValue(req[num], "price") === -999) ? value = 1 : vehicle.price = this.getValue(req[num], "price");
                        (this.getValue(req[num], "vahicleSale") === -999) ? value = 1 : vehicle.vahicleSale = this.getValue(req[num], "vahicleSale");
                        (this.getValue(req[num], "n") === -999) ? value = 1 : vehicle.n = this.getValue(req[num], "n");
                        (this.getValue(req[num], "pkm") === -999) ? value = 1 : baselineEmission.pkm = this.getValue(req[num], "pkm");

                        if (fuelType[fu] === req[num]["fuelType"] && fuelType[fu] === fueldata[fu]["type"]) {
                            vehicle.fuel = fueldata[fu];
                        }
                        // else {
                        //     vehicle.electricity = fueldata[fu];

                        // }
                    }
                }
                vehicleArray.push(vehicle);
                baselineEmission.vehicle = vehicleArray;
            }
        }
        else {
            for (let fu in fuelType) {
                for (let vehi in vehicleType) {
                    let vehicle = new VehicleDtoICAT;
                    for (let num in req) {
                        let value: number;
                        if (vehicleType[vehi] === req[num]["vehical"]) {
                            (this.getValue(req[num], "percentageReduction") === -999) ? value = 1 : vehicle.percentageReduction = this.getValue(req[num], "percentageReduction");
                        }

                        if (vehicleType[vehi] === req[num]["vehical"] && fuelType[fu] === req[num]["fuelType"]) {
                            // console.log(req[num]["vehical"])
                            vehicle.vehicleType = req[num]["vehical"];
                            (this.getValue(req[num], "distance") === -999) ? value = 1 : vehicle.distance = this.getValue(req[num], "distance");
                            (this.getValue(req[num], "fuelEconomy") === -999) ? value = 1 : vehicle.fuelEconomy = this.getValue(req[num], "fuelEconomy");
                            (this.getValue(req[num], "newTax") === -999) ? value = 1 : vehicle.newTax = this.getValue(req[num], "newTax");
                            (this.getValue(req[num], "or") === -999) ? value = 1 : vehicle.or = this.getValue(req[num], "or");

                            (this.getValue(req[num], "prevuiousTax") === -999) ? value = 1 : vehicle.prevuiousTax = this.getValue(req[num], "prevuiousTax");
                            (this.getValue(req[num], "price") === -999) ? value = 1 : vehicle.price = this.getValue(req[num], "price");
                            (this.getValue(req[num], "vahicleSale") === -999) ? value = 1 : vehicle.vahicleSale = this.getValue(req[num], "vahicleSale");
                            (this.getValue(req[num], "n") === -999) ? value = 1 : vehicle.n = this.getValue(req[num], "n");
                            (this.getValue(req[num], "pkm") === -999) ? value = 1 : baselineEmission.pkm = this.getValue(req[num], "pkm");

                            if (fuelType[fu] === req[num]["fuelType"] && fuelType[fu] === fueldata[fu]["type"]) {
                                vehicle.fuel = fueldata[fu];
                            }
                            // else {
                            //     vehicle.electricity = fueldata[fu];

                            // }
                        }
                    }
                    vehicleArray.push(vehicle);
                    console.log(vehicle)
                }

                baselineEmission.vehicle = vehicleArray;
            }
        }


        // baselineEmission.electricity = elec;
        // baselineEmission.vehicle =vehicleArray;
        return baselineEmission;
    }

    /** CDM_AMS_III_AK baseline mapping */
    public assignParameters_AMSIIIAK1(req: any, fuelData: any, powerPlantData: any, year: number) {
        let baseEmission = new Array();
        let baselineEmission = new BaselineDtoAMSIII();

        for (let _pp of powerPlantData) {
            let pp = new PowerPlantDtoAMSIII()
            for (let _fu of fuelData) {
                let fuel = new FuelDtoAMSIII();
                for (let _req of req) {
                    let value: number;
                    if (_pp === _req['powerPlant']) {
                        pp.type = _pp
                        for (let code of ['ncvbf', 'pbf', 'pbfsite', 'pbfother', 'cbf', 'fpj', 'fff']) {
                            (this.getValue(_req, code) === -999) ? value = 1 : pp[code] = this.getValue(_req, code)
                        }
                    }
                    if (_fu === _req['fuelType']) {
                        (this.getValue(_req, 'efco2') === -999) ? value = 1 : fuel['efco2'] = this.getValue(_req, 'efco2')
                        pp.fuel = fuel
                    }
                }
            }
            baselineEmission.powerplant = pp;
            baselineEmission.year = year;
            baseEmission.push(baselineEmission)
        }

        return baseEmission;
    }
    /** CDM_AMS_III_AK project mapping */
    public assignParameters_AMSIIIAK2(req: any, feedstockData: any, vehicalData: any, fuelData: any, soilData: any, stratumData: any, year: number) {
        let project = new Array();
        let projectEmission = new ProjectDtoAMSIII();

        let fsArray = new Array();
        let vehicleArray = new Array();
        let fuelArray = new Array();
        let soilArray = new Array();
        let stratumArray = new Array();

        for (let _fs of feedstockData) {
            let fs = new FeedstockDtoAMSIII();
            for (let _veh of vehicalData) {
                let vehicle = new VehicleDtoAMSIII();
                for (let _req of req) {
                    let value: number;
                    if (_fs === _req['feedstock']) {
                        fs.type = _fs;
                        for (let code of ['peww', 'as', 'efs', 't', 'qn', 'aftm', 'efft', 'fpbf', 'af2', 'mpmp', 'mmp', 'mpbp', 'mbp']) {
                            (this.getValue(_req, code) === -999) ? value = 1 : fs[code] = this.getValue(_req, code)
                        }

                        if (_veh === _req["vehicle"]) {
                            vehicle.type = _veh
                            for (let code of ['df', 'fr', 'efco2']) {
                                (this.getValue(_req, code) === -999) ? value = 1 : vehicle[code] = this.getValue(_req, code)
                            }
                        }
                    }
                }
                vehicleArray.push(vehicle);
            }
            fs.vehicle = vehicleArray;

            for (let _fu of fuelData) {
                let fuel = new FuelDtoAMSIII();
                for (let _req of req) {
                    let value: number;
                    if (_fs === _req['feedstock'] && _fu === _req['fuelType']) {
                        fuel.type = _fu
                        if (_fu === "Methanol") {
                            for (let code of ['fuelConsumption', 'efcm']) {
                                (this.getValue(_req, code) === -999) ? value = 1 : fuel[code] = this.getValue(_req, code)
                            }
                        } else if (_fu === "Electricity") {
                            for (let code of ['peec', 'pebshe']) {
                                (this.getValue(_req, code) === -999) ? value = 1 : fuel[code] = this.getValue(_req, code)
                            }
                        } else {
                            for (let code of ['pefc', 'pebshf']) {
                                (this.getValue(_req, code) === -999) ? value = 1 : fuel[code] = this.getValue(_req, code)
                            }
                        }
                    }
                }
                fuelArray.push(fuel)
            }
            fs.fuel = fuelArray;

            for (let _soil of soilData) {
                let soil = new SoilDtoAMSIII();
                for (let _req of req) {
                    let value: number;
                    if (_fs === _req['feedstock'] && _soil === _req['soil']) {
                        soil.type = _soil
                        for (let code of ['qsa', 'asa', 'efsa']) {
                            (this.getValue(_req, code) === -999) ? value = 1 : soil[code] = this.getValue(_req, code)
                        }
                    }
                }
                soilArray.push(soil)
            }
            fs.soil = soilArray;

            for (let _stra of stratumData) {
                let stratum = new StratumDtoAMSIII();
                for (let _req of req) {
                    let value: number;
                    if (_fs === _req['feedstock'] && _stra === _req['stratum']) {
                        stratum.type = _stra
                        for (let code of ['asoc', 'socref', 'flub', 'fmgb', 'finb', 'flup', 'fmgp', 'finp', 'afr', 'b', 'r']) {
                            (this.getValue(_req, code) === -999) ? value = 1 : stratum[code] = this.getValue(_req, code)
                        }
                    }
                }
                stratumArray.push(stratum)
            }
            fs.stratum = stratumArray;
            fsArray.push(fs)

        }
        projectEmission.feedstock = fsArray;
        projectEmission.year = year;

        project.push(projectEmission)
        return project;
    }
    /** CDM_AMS_III_AK leakage mapping */
    public assignParameters_AMSIIIAK3(req: any, fuelData: any, residueData: any, year: number) {
        let leakage = new Array();
        let leakageEmission = new LeakageDtoAMSIII();

        let fuelArray = new Array();
        let residueArray = new Array();

        for (let _fu of fuelData) {
            let fuel = new FuelDtoAMSIII();
            fuel.type = _fu
            for (let _req of req) {
                // Common section 
                if (_req["fuelType"] === "Common") {
                    let value: number;
                    (this.getValue(_req, 'efco2') === -999) ? value = 1 : leakageEmission['efco2'] = this.getValue(_req, 'efco2');
                    (this.getValue(_req, 'ncvbf') === -999) ? value = 1 : leakageEmission['ncvbf'] = this.getValue(_req, 'ncvbf')
                }
                if (_fu === _req['fuelType']) {
                    let value: number;
                    if (_fu === "Methanol") {
                        for (let code of ['efmeoh', 'fuelConsumption']) {
                            (this.getValue(_req, code) === -999) ? value = 1 : fuel[code] = this.getValue(_req, code)
                        }
                    } else {
                        for (let code of ['efijx']) {
                            (this.getValue(_req, code) === -999) ? value = 1 : fuel[code] = this.getValue(_req, code)
                        }
                    }
                }
            }
            fuelArray.push(fuel)
        }

        for (let _res of residueData) {
            let residue = new ResidueDtoAMSIII();
            residue.type = _res
            for (let _req of req) {
                let value: number;
                for (let code of ['brpjn', 'ncvn']) {
                    (this.getValue(_req, code) === -999) ? value = 1 : residue[code] = this.getValue(_req, code)
                }
            }
            residueArray.push(residue)
        }

        leakageEmission.fuel = fuelArray;
        leakageEmission.residue = residueArray;
        leakageEmission.year = year;

        leakage.push(leakageEmission)
        return leakage;
    }

    /** CDM_ACM0017 baseline mapping */
    public assignParameters_ACM0017_1(req: any, fuelData: any, powerPlantData: any, year: number) {
        let baseEmission = new Array();
        let baselineEmission = new BaselineDtoACM0017();
        let fuelArray = new Array();

        for (let _pp of powerPlantData) {
            let pp = new PowerplantDtoACM0017()
            pp.type = _pp;
            for (let _fu of fuelData) {
                let fuel = new FuelDtoACM0017();
                fuel.type = _fu;
                for (let _req of req) {
                    let value: number;
                    if (_pp === _req['powerPlant']) {
                        pp.type = _pp
                        for (let code of ['ncvbf', 'pbf', 'pbfsite', 'pbfother']) {
                            (this.getValue(_req, code) === -999) ? value = 1 : pp[code] = this.getValue(_req, code)
                        }
                    }
                    if (_fu === _req['fuelType']) {
                        if (["Diesel", "Petrol"].includes(_fu)) {
                            (this.getValue(_req, 'efco2') === -999) ? value = 1 : fuel['efco2'] = this.getValue(_req, 'efco2')
                        } else {
                            for (let code of ['cbf', 'fpj', 'freg']) {
                                (this.getValue(_req, code) === -999) ? value = 1 : fuel[code] = this.getValue(_req, code)
                            }
                        }

                    }
                }
                fuelArray.push(fuel)
            }
            pp.fuel = fuelArray;

            baselineEmission.powerplant = pp;
            baselineEmission.year = year;
            baseEmission.push(baselineEmission)
        }

        return baseEmission;
    }
    /*CDM_ACM0017 project mapping*/
    public assignParameters_ACM0017_2(req: any, fuelData: any, powerPlantData: any, feedstockData: any, stratumData: any, year: number) {
        let project = new Array();
        let projectEmission = new ProjectDtoACM0017()

        let stratumArray = new Array();
        let feedstockArray = new Array();

        let pp = new PowerplantDtoACM0017();
        for (let _pp of powerPlantData) {
            let fuel = new FuelDtoACM0017();
            pp.type = _pp;
            for (let _req of req) {
                let value: number;
                if (fuelData[0] === _req['fuelType']) {
                    fuel.type = fuelData
                    for (let code of ['fuelConsumption', 'efcmeoh']) {
                        (this.getValue(_req, code) === -999) ? value = 1 : fuel[code] = this.getValue(_req, code)
                    }
                }

            }
            pp.prfuel = fuel

            for (let _stra of stratumData) {
                let stratum = new StratumDtoACM0017();
                stratum.type = _stra;
                for (let _req of req) {
                    let value: number;
                    if (_stra === _req['stratum']) {
                        stratum.type = _stra
                        for (let code of ['asoc', 'socref', 'flub', 'fmgb', 'finb', 'flup', 'fmgp', 'finp', 'afr', 'b', 'r']) {
                            (this.getValue(_req, code) === -999) ? value = 1 : stratum[code] = this.getValue(_req, code)
                        }
                    }
                }
                stratumArray.push(stratum)
            }

            pp.stratum = stratumArray;

            for (let _fs of feedstockData) {
                let fs = new FeedstockDtoACM0017();
                fs.type = _fs;
                for (let _req of req) {
                    let value: number;
                    if (_fs === _req['feedstock']) {
                        fs.type = _fs
                        for (let code of ['as', 'efs']) {
                            (this.getValue(_req, code) === -999) ? value = 1 : fs[code] = this.getValue(_req, code)
                        }
                    }
                }
                feedstockArray.push(fs)
            }
            pp.feedstock = feedstockArray;

            for (let _req of req) {
                let value: number;
                if (_pp === _req['powerplant']) {
                    pp.type = _pp
                    for (let code of ['af1', 'pebp', 'pebt', 'af2', 't']) {
                        (this.getValue(_req, code) === -999) ? value = 1 : pp[code] = this.getValue(_req, code)
                    }
                }
            }
        }

        projectEmission.powerplant = pp;
        projectEmission.year = year;

        project.push(projectEmission)
        return project;

    }

    /** CDM_ACM0017 leakage mapping */
    public assignParameters_ACM0017_3(req: any, fuelData: any, year: number) {
        let leakage = new Array();
        let leakageEmission = new LeakageDtoACM0017();

        let fuelArray = new Array();
        let residueArray = new Array();

        for (let _fu of fuelData) {
            let fuel = new FuelDtoACM0017();
            fuel.type = _fu
            for (let _req of req) {
                // Common section 
                if (_req["fuelType"] === "Common") {
                    console.log("efco2 request", _req)
                    let value: number;
                    (this.getValue(_req, 'lebr') === -999) ? value = 1 : leakageEmission['lebr'] = this.getValue(_req, 'lebr');
                    (this.getValue(_req, 'ncvbf') === -999) ? value = 1 : leakageEmission['ncvbf'] = this.getValue(_req, 'ncvbf')
                }
                if (_fu === _req['fuelType']) {
                    let value: number;
                    if (_fu === "Methanol") {
                        for (let code of ['efmeoh', 'fuelConsumption']) {
                            (this.getValue(_req, code) === -999) ? value = 1 : fuel[code] = this.getValue(_req, code)
                        }
                    } else {
                        for (let code of ['efijx']) {
                            (this.getValue(_req, code) === -999) ? value = 1 : fuel[code] = this.getValue(_req, code)
                        }
                    }
                }
            }
            fuelArray.push(fuel)
        }

        leakageEmission.fuel = fuelArray;
        leakageEmission.year = year;

        leakage.push(leakageEmission)
        return leakage;
    }

    /** CDM_AMSIIIAT mapping */
    public assignParameters_AMSIIIAT(req: any, fuelData: any, vehicleData: any, year: number, isBaseline = false) {
        let baseline = new Array();
        let dtoEmission;

        isBaseline ? dtoEmission = new BaseLineDtoAMSIIIAT() : dtoEmission = new ProjectDtoAMSIIIAT()

        let vehicleArray = new Array();
        for (let _vehicle of vehicleData) {
            let vehicle = new VehicleDtoAMSIIIAT();
            let fuelArray = new Array();
            for (let _fuel of fuelData) {
                let fuel = new FuelDtoAMSIIIAT();
                let fuelType = "";
                for (let _req of req) {
                    if (_fuel === _req["fuelType"] && _vehicle === _req["vehical"]) {
                        vehicle.type = _vehicle
                        fuelType = _fuel;
                        let value: number;
                        let codes;
                        isBaseline ? codes = ['dfv', 'pfv', 'pfvb', 'dpfv', 'dpfvb', 'npv', 'adpv', 'nbl'] :
                            codes = ['fcfv', 'fcpv']
                        for (let code of codes) {
                            (this.getValue(_req, code) === -999) ? value = 1 : vehicle[code] = this.getValue(_req, code)
                        }
                    }
                    if (_fuel === _req["fuelType"] && _fuel === fuelType) {
                        fuel.type = _fuel
                        let value: number;
                        for (let code of ['ncv', 'efco2']) {
                            (this.getValue(_req, code) === -999) ? value = 1 : fuel[code] = this.getValue(_req, code)
                        }
                    }
                }
                if (fuelType !== "") fuelArray.push(fuel)
            }
            vehicle.fuel = fuelArray;
            vehicleArray.push(vehicle)
        }

        if (isBaseline) {
            dtoEmission.year = year;
        }
        dtoEmission.vehicle = vehicleArray;
        baseline.push(dtoEmission);
        console.log("isBaseline", isBaseline, dtoEmission)

        return baseline;
    }

    /** CDM_AMSIIIBN baseline mapping */
    public assignParameters_AMSIIIBN_1(req: any, vehicleData: any, fuelData: any, routeData: any, year: number, isProject = false) {
        let baseline = new Array();
        let dtoEmission;

        isProject ? dtoEmission = new ProjectDtoAMSIIIBN() : dtoEmission = new BaseLineDtoAMSIIIBN()

        let routeArray = new Array();


        for (let _route of routeData) {
            let route = new RouteDtoIIIBN();
            let vehicleArray = new Array();
            for (let _vehicle of vehicleData) {
                let vehicle = new VehicleDtoAMSIIIBN();
                let fuelArray = new Array();
                for (let _fuel of fuelData) {
                    let fuel = new FuelDtoAMSIIIBN();
                    let currentRoute;
                    for (let _req of req) {
                        let value: number;
                        if (_route === _req['route'] && _vehicle === _req['vehical'] && _fuel === _req['fuelType']) {
                            currentRoute = _route;
                            vehicle.type = _vehicle
                            for (let code of ["fuelConsumption"]) {
                                (this.getValue(_req, code) === -999) ? value = 1 : fuel[code] = this.getValue(_req, code)
                            }
                        } else if (_fuel === _req['fuelType'] && _route === currentRoute) {
                            fuel.type = _fuel;
                            for (let code of ["tdlgrid", "ncv"]) {
                                (this.getValue(_req, code) === -999) ? value = 1 : fuel[code] = this.getValue(_req, code)
                            }
                            if (isProject) {
                                for (let code of ["efkgrid", "efco2"]) {
                                    (this.getValue(_req, code) === -999) ? value = 1 : fuel[code] = this.getValue(_req, code)
                                }
                            }
                        } else if (_route === _req['route']) {
                            route.type = _route;
                            (this.getValue(_req, 'pk') === -999) ? value = 1 : route['pk'] = this.getValue(_req, 'pk')
                            if (isProject) {
                                for (let code of ["secpkm", "avdk"]) {
                                    (this.getValue(_req, code) === -999) ? value = 1 : route[code] = this.getValue(_req, code)
                                }
                            }
                        }
                    }
                    if (Object.keys(fuel).length !== 0) {
                        fuelArray.push(fuel)
                    }
                    currentRoute = ""
                }
                vehicle.fuel = fuelArray;
                if (Object.keys(vehicle).length !== 0) {
                    vehicleArray.push(vehicle)
                }
            }
            route.vehicle = vehicleArray
            routeArray.push(route)
        }
        dtoEmission.route = routeArray;
        if (!isProject) {
            dtoEmission.year = year;
        }
        console.log(dtoEmission.route, dtoEmission.route[0].vehicle, dtoEmission.route[0].vehicle[0].fuel, dtoEmission.route[0].vehicle[1].fuel)

        baseline.push(dtoEmission)
        return baseline;
    }

    public getFuel(req: any, fueltype: any) {
        let fuel = new Array();
        for (let fu in fueltype) {
            let fueldata = new FuelDtoICAT();
            for (let num in req) {
                let value: number;
                if (fueltype[fu] === req[num]["fuelType"]) {
                    fueldata.type = req[num]["fuelType"];
                    // fueldata.ef = this.getValue(req[num], "ef");
                    (this.getValue(req[num], "ef") === -999) ? value = 1 : fueldata.ef = this.getValue(req[num], "ef");
                    (this.getValue(req[num], "used_weight") === -999) ? value = 1 : fueldata.used_weight = this.getValue(req[num], "used_weight");
                    (this.getValue(req[num], "used_liters") === -999) ? value = 1 : fueldata.used_liters = this.getValue(req[num], "used_liters");
                    (this.getValue(req[num], "density") === -999) ? value = 1 : fueldata.density = this.getValue(req[num], "density");
                    (this.getValue(req[num], "ncv") === -999) ? value = 1 : fueldata.ncv = this.getValue(req[num], "ncv");
                    (this.getValue(req[num], "sfc") === -999) ? value = 1 : fueldata.sfc = this.getValue(req[num], "sfc");
                    (this.getValue(req[num], "vkt") === -999) ? value = 1 : fueldata.vkt = this.getValue(req[num], "vkt");
                    (this.getValue(req[num], "fc") === -999) ? value = 1 : fueldata.fc = this.getValue(req[num], "fc");
                    (this.getValue(req[num], "fuelPrice") === -999) ? value = 1 : fueldata.fuelPrice = this.getValue(req[num], "fuelPrice");
                    (this.getValue(req[num], "priceElasticity") === -999) ? value = 1 : fueldata.priceElasticity = this.getValue(req[num], "priceElasticity");
                    (this.getValue(req[num], "crosePriseElasticity") === -999) ? value = 1 : fueldata.crosePriseElasticity = this.getValue(req[num], "crosePriseElasticity");
                    (this.getValue(req[num], "priceIncrease") === -999) ? value = 1 : fueldata.priceIncrease = this.getValue(req[num], "priceIncrease");
                    (this.getValue(req[num], "efco2xy") === -999) ? value = 1 : fueldata.efco2xy = this.getValue(req[num], "efco2xy");

                    (this.getValue(req[num], "efco2") === -999) ? value = 1 : fueldata.efco2 = this.getValue(req[num], "efco2");
                    (this.getValue(req[num], "ecblky") === -999) ? value = 1 : fueldata.ecblky = this.getValue(req[num], "ecblky");
                    (this.getValue(req[num], "efefjy") === -999) ? value = 1 : fueldata.efefjy = this.getValue(req[num], "efefjy");
                    (this.getValue(req[num], "tdlky") === -999) ? value = 1 : fueldata.tdlky = this.getValue(req[num], "tdlky");

                    (this.getValue(req[num], "pn") === -999) ? value = 1 : fueldata.pn = this.getValue(req[num], "pn");
                    (this.getValue(req[num], "wciy") === -999) ? value = 1 : fueldata.wciy = this.getValue(req[num], "wciy");

                    (this.getValue(req[num], "tdljy") === -999) ? value = 1 : fueldata.tdljy = this.getValue(req[num], "tdljy");



                }
                // else if (fueltype[fu] === req[num]["fuelType"]) {
                //     (this.getValue(req[num], "vkt") === -999) ? value = 1 : fueldata.vkt = this.getValue(req[num], "vkt");
                //     (this.getValue(req[num], "sfc") === -999) ? value = 1 : fueldata.sfc = this.getValue(req[num], "sfc");
                // }
            }
            // console.log(fueldata)
            fuel.push(fueldata);
        }
        return fuel;
    }

    public getTraficCongestion(req: any, vehitype: any) {
        let vehicle = new Array();

        for (let vehi in vehitype) {
            let vehiData = new TraficCongestionDto();
            for (let num in req) {
                let value: number;
                if (vehitype[vehi] === req[num]["vehical"]) {
                    (this.getValue(req[num], "ms") === -999) ? value = 1 : vehiData.ms = this.getValue(req[num], "ms");
                    (this.getValue(req[num], "or") === -999) ? value = 1 : vehiData.or = this.getValue(req[num], "or");
                    (this.getValue(req[num], "sfc") === -999) ? value = 1 : vehiData.sfc = this.getValue(req[num], "sfc");
                    (this.getValue(req[num], "efkm") === -999) ? value = 1 : vehiData.efkm = this.getValue(req[num], "efkm");
                }

            }
            vehicle.push(vehiData);
        }
        return vehicle;
    }

    // public getvehicle(req:any,vehitype:any, fuel:any){
    //     let vehicle = new Array();
    //     let vehicle = new Array();
    //         let vehiData= new VehicleDto();
    //         for(let num in req){
    //             for(let fu in fuel){
    //                 let value:number
    //                 if(vehitype[vehi] === req[num]["vehical"] && fuel[fu]===req[num]["fuelType"]){
    //                     vehiData.type = req[num]["vehical"];
    //                     vehiData.fuel = fuel[fu];
    //                     (this.getValue(req[num],"ef_pkm") === -999) ? value=1 : vehiData.ef_pkm =this.getValue(req[num],"ef_pkm");
    //                     (this.getValue(req[num],"ef_km") === -999) ? value=1 : vehiData.ef_pkm =this.getValue(req[num],"ef_km");
    //                     (this.getValue(req[num],"sfc") === -999) ? value=1 : vehiData.ef_pkm =this.getValue(req[num],"sfc");
    //                     (this.getValue(req[num],"or") === -999) ? value=1 : vehiData.ef_pkm =this.getValue(req[num],"or");
    //                     (this.getValue(req[num],"ms") === -999) ? value=1 : vehiData.ef_pkm =this.getValue(req[num],"ms");
    //                 }
    //             }

    //         }
    //         vehicle.push(vehiData);
    //     }
    //     return vehicle;
    // }

    public getValue(req: any, code: string) {
        var value: number;
        if (req['code'] === code) {
            if (req['value'] != null && req['value'] != '') {
                value = parseFloat(req['value']);
                return value;
            }
            else return 0;
        }
        else return -999;
    }

    public getValueString(req: any) {
        var value: string
        value = (req['countryCodeExtended']);
        return value;

    }
}