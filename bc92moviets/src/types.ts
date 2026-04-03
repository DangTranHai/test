import { AxiosError } from "axios"


export type TMovie = {
    maPhim : number | string,
    tenPhim : string,
    trailer : string,
    hinhAnh : string,
    moTa : string,
    maNhom : string,
    ngayKhoiChieu : string,
    danhGia : number,
    hot : boolean,
    dangChieu : boolean,
    sapChieu : boolean,
}

export type TiniState <T> = {
    loading : boolean,
    data : null | TMovie[],
    error : null | AxiosError,
}

export type TResponse<T> = {
    statusCode : number;
    message : string;
    content : T;
}