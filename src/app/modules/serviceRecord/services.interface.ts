export enum Status {
    PENDING = "pending",
    IN_PROGRESS = "in_progress",
    DONE = "done",
    CANCELLED = "cancelled",
  }

export interface IService {
    bikeId:string,
    serviceDate:Date,
    description:string,
    status:Status,
    completionDate:Date,
}