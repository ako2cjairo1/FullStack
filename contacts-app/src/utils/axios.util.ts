import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { CreateError } from './helper.util'

// extract api config from environment vars
export const { VITE_PUBLIC_API_BASEURL: host, VITE_PUBLIC_API_ENDPOINT: endPoint } = import.meta.env

export const axiosBaseConfig: AxiosRequestConfig = {
	// 5s response timeout
	timeout: 5000,
	baseURL: `${host}${endPoint}`,
}

export const AxiosInstance = axios.create(axiosBaseConfig)

AxiosInstance.interceptors.response.use(
	(res: AxiosResponse) => res.data,
	(err: unknown) => {
		console.error(`[ContactAPI]: ${CreateError(err).message}`)
		throw err
	}
)
