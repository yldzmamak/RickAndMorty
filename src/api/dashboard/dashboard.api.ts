import { HttpService } from "@/services/index";
import { IGlobalAPIParams, IGlobalAPIResponse } from "@/types/global";
import { IEpisode } from "@/types/interfaces/dashboard/dashboard";

import { CommonEnpoints } from "./dashboard.endpoints";


class Common {

  public getEpisodeList = (params: IGlobalAPIParams) => {
    const url = CommonEnpoints.Episode;
    return HttpService.get<IGlobalAPIResponse<IEpisode>>(url, { params });
  };

  public GetEpisodeDetail = (params: IGlobalAPIParams) => {
    const url = `${CommonEnpoints.Episode}/${params.id}`;
    return HttpService.get<IGlobalAPIResponse<IEpisode>>(url);
  };

  public GetCharacters = (params: IGlobalAPIParams) => {
    const url = `${CommonEnpoints.Character}/${params.urlList}`; CommonEnpoints.Character;
    return HttpService.get<IGlobalAPIResponse<IEpisode>>(url);
  };
}

export const CommonApi = new Common();