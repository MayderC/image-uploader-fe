import type { IImageRequest, IImageResponse } from "@/Interfaces/image.interface"

export const API_URL = import.meta.env.VITE_API_URL

export const getImage = async(id: string) : Promise<IImageResponse>=> {

  const res = await fetch(API_URL + "/img/" +id)
  const data = res.json()
  return data
}


export const saveImage = async(img: IImageRequest) : Promise<IImageResponse> => {
  const res = await fetch(API_URL + "/img", {
    method: "POST",
    headers : {
      "content-type": "application/json"
    },
    body: JSON.stringify(img)
  })
  const data = await res.json()
  return data.response;

}