import {fetchAPI} from "./graphcms";
import {CTAModel, ImageModel, RichText} from "./model";

export interface CarouselResponse {
    carousel: CarouselModel
}
export interface CarouselModel {
    items?: (CarouselItem)[] | null;
    carouselTitle: string;
}



export interface CarouselItem {
    id: string;
    heading: string;
    cta?: CTAModel | null;
    cssLocation: string;
    backgroundImage: ImageModel
    description: RichText;

}





export async function getCarouselItemsById(id):Promise<CarouselModel> {
    const data:CarouselResponse = await fetchAPI<CarouselResponse>(`
        query MyQuery($id: ID!) {
            carousel(where: {id: $id}) {
                carouselTitle
                items {
                ... on CarouselItem {
                        id
                        heading
                        backgroundImage {
                          url
                          fileName
                        }
                        cssLocation
                        description {
                            html
                        }
                        cta {
                          isSecondary
                          text
                          url
                        }
                    }
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
    return data.carousel;
}