export class SlideModel {
    src: string = '';
    srcLarge?: string = '';
    srcMedium?: string = '';
    alt?: string = '';
    selectable?: SelectableModel;
    x?: string = '';
    y?: string = '';
    contactSlide?: string;
}
export class SelectableModel {
    id?: number
    title: string = '';
    titleFull: string = '';
    linkTitle: string = '';
    caption?: string = '';
    link?: string = '';

}