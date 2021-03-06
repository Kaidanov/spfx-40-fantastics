declare interface ITilesMenuStrings {
  PropertyPaneDescription: string;
  PropertyPageGeneral: string;
  PropertyPageTextPanel: string;
  PropertyPageBorder: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  GeneralGroupName: string;
  BorderGroupName: string;
  TilesTypeFieldLabel: string;
  EnableIconsFieldLabel: string;
  TextPanelGroupName: string;
  TextPanelEnableFieldLabel: string;
  TextPanelAlwaysOnTopFieldLabel: string;
  TextPanelPositionFieldLabel: string;
  TextPanelOpacityFieldLabel: string;
  TextPanelFontFieldLabel: string;
  TextPanelFontSizeFieldLabel: string;
  TextPanelBackgroundColorFieldLabel: string;
  TextPanelAlignFieldLabel: string;
  TextPanelFontColorFieldLabel: string;
  EnableShadowFieldLabel: string;
  EnableBorderFieldLabel: string;
  SpaceBetweenColsFieldLabel: string;
  BorderColorFieldLabel: string;
  BorderFieldLabel: string;
  ErrorSelectList: string;
  ErrorNoItems: string;
  Loading: string;
  Items: string;
  ManageItems: string;
}

declare module 'TilesMenuStrings' {
  const strings: ITilesMenuStrings;
  export = strings;
}
