import {fetchAPI} from "./graphcms";

import {ImageModel, RichText} from "./model";

export interface TextImageResponse {
    textImage: TextImageModel
}
export interface TextImageModel {
    image: ImageModel
    text: RichText
}

export async function getTextImageById(id):Promise<TextImageModel> {
    const data:TextImageResponse = await fetchAPI<TextImageResponse>(`
        query MyQuery($id: ID!) {
            textImage(where: {id: $id}) {
                image {
                    fileName
                    url
                }
                text {
                    html
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
    return data.textImage;
}