import {
  makeTrip,
  deleteTrip,
  updateTrip,
  findTripByUserId,
  findTripByAirport
} from "../models/trip";
import jwt, { Secret } from "jsonwebtoken";
