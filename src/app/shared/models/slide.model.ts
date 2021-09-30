export interface PortfolioModel {
    src: string;
    srcLarge?: string;
    srcMedium?: string;
    alt?: string;
    selectable?: SelectableModel;
    x?: string;
    y?: string;
}
export interface SelectableModel {
    id?: number
    title: string;
    titleFull: string;
    linkTitle: string;
    caption?: string;
    link?: string;

}