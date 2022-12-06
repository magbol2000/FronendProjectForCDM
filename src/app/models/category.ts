export interface ICategory {
  id: number,
  // snake_case больше распространён в беке и полноценных приложениях, как правило, во фронте принято юзать camelCase (в js/ts файлах)
  category_name: string
}
