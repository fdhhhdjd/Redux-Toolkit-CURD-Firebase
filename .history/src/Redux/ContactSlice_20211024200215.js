import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 const initialState={
    contacts=[
        {
            id: 1,
            name: "Nguyễn Tiến Tài",
            email: "nguyentientai10@gmai.com",
            phone: "0798805741",
            status: "Active",
          },
          {
            id: 2,
            name: "Nguyễn Hữu Quyền",
            email: "huuquyen2000@gmail.com",
            phone: "09658235656",
            status: "Inactive",
          },
          {
            id: 3,
            name: "Nguyễn Bảo Khang",
            email: "jbaokhangdesigner@gmail.com",
            phone: "0353263452",
            status: "Active",
          },
          {
            id: 4,
            name: "Bùi Huỳnh Quốc Trung	",
            email: "quoctrung@gmail.com",
            phone: "0348561815",
            status: "Inactive",
          },
          {
            id: 5,
            name: "Trần Phi Hoàng",
            email: "phihoang1@gmail.com",
            phone: "0936095986",
            status: "Active",
          },
    ],
}