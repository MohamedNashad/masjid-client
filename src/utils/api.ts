import axios from "axios";
import endpoints from "@/configs/endpoints-config";

// Base URL for all apis
export const API = axios.create({ baseURL: endpoints.backEndBaseUrl });
