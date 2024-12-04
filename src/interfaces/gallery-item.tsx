export interface GalleryItem {
    id: number;
    api_model: string;
    api_link: string;
    is_boosted: boolean;
    title: string;
    alt_titles: undefined;
    thumbnail: Thumbnail;
    main_reference_number: string;
    has_not_been_viewed_much: boolean;
    boost_rank: number;
    date_start: number;
    date_end: number;
    date_display: string;
    date_qualifier_title: string;
    date_qualifier_id: undefined;
    artist_display: string;
    place_of_origin: string;
    description: string;
    short_description: string;
    dimensions: string;
    dimensions_detail: DimensionsDetail[];
    medium_display: string;
    inscriptions: undefined;
    credit_line: string;
    catalogue_display: undefined;
    publication_history: undefined;
    exhibition_history: undefined;
    provenance_text: undefined;
    edition: undefined;
    publishing_verification_level: string;
    internal_department_id: number;
    fiscal_year: number;
    fiscal_year_deaccession: undefined;
    is_public_domain: boolean;
    is_zoomable: boolean;
    max_zoom_window_size: number;
    copyright_notice: undefined;
    has_multimedia_resources: boolean;
    has_educational_resources: boolean;
    has_advanced_imaging: boolean;
    colorfulness: number;
    color: Color;
    latitude: number;
    longitude: number;
    latlon: string;
    is_on_view: boolean;
    on_loan_display: undefined;
    gallery_title: undefined;
    gallery_id: undefined;
    nomisma_id: undefined;
    artwork_type_title: string;
    artwork_type_id: number;
    department_title: string;
    department_id: string;
    artist_id: number;
    artist_title: string;
    alt_artist_ids: undefined[];
    artist_ids: number[];
    artist_titles: string[];
    category_ids: string[];
    category_titles: string[];
    term_titles: string[];
    style_id: string;
    style_title: string;
    alt_style_ids: undefined[];
    style_ids: string[];
    style_titles: string[];
    classification_id: string;
    classification_title: string;
    alt_classification_ids: string[];
    classification_ids: string[];
    classification_titles: string[];
    subject_id: string;
    alt_subject_ids: string[];
    subject_ids: string[];
    subject_titles: string[];
    material_id: string;
    alt_material_ids: string[];
    material_ids: string[];
    material_titles: string[];
    technique_id: string;
    alt_technique_ids: undefined[];
    technique_ids: string[];
    technique_titles: string[];
    theme_titles: string[];
    image_id: string;
    alt_image_ids: undefined[];
    document_ids: string[];
    sound_ids: undefined[];
    video_ids: undefined[];
    text_ids: string[];
    section_ids: undefined[];
    section_titles: undefined[];
    site_ids: undefined[];
    suggest_autocomplete_boosted: string;
    suggest_autocomplete_all: SuggestAutocompleteAll[];
    source_updated_at: string;
    updated_at: string;
    timestamp: string;
}

export interface Thumbnail {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
}

export interface DimensionsDetail {
    depth: undefined;
    width: number;
    height: number;
    diameter: undefined;
    clarification: undefined;
}

export interface Color {
    h: number;
    l: number;
    s: number;
    percentage: number;
    population: number;
}

export interface SuggestAutocompleteAll {
    input: string[];
    contexts: Contexts;
    weight?: number;
}

export interface Contexts {
    groupings: string[];
}
