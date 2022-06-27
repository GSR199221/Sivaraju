import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  post(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  get() {
    return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }





  update(data: any, id: any) {
    return this.http.put<any>("http://localhost:3000/posts/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  delete(id: any) {
    return this.http.delete<any>("http://localhost:3000/posts/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  getFlights() {
    return this.http.get<any>("http://localhost:3000/flights")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getBookedFlightsHistory() {
    return this.http.get<any>("http://localhost:3000/bookedFlightsHistory")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  postBookFlight(data: any) {
    return this.http.post<any>("http://localhost:3000/bookedFlights", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  // history
  postBookFlightHistory(data: any) {
    return this.http.post<any>("http://localhost:3000/bookedFlightsHistory", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getBookings() {
    return this.http.get<any>("http://localhost:3000/bookedFlights")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteBookings(id: any) {
    return this.http.delete<any>(`http://localhost:3000/bookedFlights/${id}`)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getBookingsId(id: any) {
    return this.http.get<any>(`http://localhost:3000/bookedFlights/${id}`)
      .pipe(map((res: any) => {
        return res.id;
      }))
  }


  createUser(data:any){
    return this.http.post<any>("http://localhost:3000/createUser", data)
    .pipe(map((res: any) => {
      return res;
    }))
  }
  getUsers() {
    return this.http.get<any>(`http://localhost:3000/createUser`)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  createFlight(data:any){
    return this.http.post<any>("http://localhost:3000/flights", data)
    .pipe(map((res: any) => {
      return res;
    }))
  }
  getFlightAdminById(id: any) {
    return this.http.get<any>(`http://localhost:3000/flights/${id}`)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateFlightByAdmin(id: any,data: any) {
    return this.http.put<any>("http://localhost:3000/flights/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteFlightByAdmin(id: any) {
    return this.http.delete<any>("http://localhost:3000/flights/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  patchFlightByAdmin(id: any,data: any) {
    return this.http.patch<any>("http://localhost:3000/flights/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}