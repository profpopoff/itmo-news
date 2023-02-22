export interface Post {
   id: number
   title: string
   image_small: string
   image_big: string
   creation_date: string
   date: Date
   view_count: number
   parent_category: ParentCategory
   category: Category
   url: string
}

export interface ParentCategory {
   category_id: number
   category_title: string
   color_title: string
   color: string
}

export interface Category {
   category_id: number
   category_title: string
   color_title: string
   color: string
}