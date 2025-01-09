export class HtmlContextDetailsModel {

    htmlVersion: string;
    title: string;
    headings: object;
    internalLinks: number;
    externalLinks: number;
    isLoginForm: boolean;

    constructor(htmlVersion: string, title: string, headings: object, internalLinks: number, externalLinks: number, isLoginForm: boolean) {
        this.htmlVersion = htmlVersion;
        this.title = title;
        this.headings = headings;
        this.internalLinks = internalLinks;
        this.externalLinks = externalLinks;
        this.isLoginForm = isLoginForm;
    }
}