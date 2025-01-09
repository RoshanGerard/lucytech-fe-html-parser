import {AbstractResponseDto} from "./abstract-response.dto.ts";
import {HtmlContextDetailsModel} from "../model/html-context-details.model.ts";

export class HtmlContextDetailsResponseDto extends AbstractResponseDto<HtmlContextDetailsModel> {

    constructor(status: string, data: HtmlContextDetailsModel) {
        super(status, data);
    }
}