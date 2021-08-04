import {fetchAPI} from "./graphcms";
import {ImageModel, RichText, CTAModel} from "./model";

interface BannerResponse {
    banner: BannerModel
}
export interface BannerModel{
    backgroundImage:ImageModel
    text?:RichText
    cta?: CTAModel
}


export async function getBannerById(id):Promise<BannerModel> {
    const data:BannerResponse = await fetchAPI<BannerResponse>(`
       query MyQuery($id: ID!) {
          banner(where: {id: $id}){
            backgroundImage {
              url
            }
            text{
              html
            },
            cta{
              url,
              text,
              isSecondary
            }
          }
        }`,
        {
            preview: false,
            variables: {
                id,
            },
        }
    )
    return data.banner;
}