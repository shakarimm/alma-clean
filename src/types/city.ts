export type City = 'almaty' | 'shimkent' | 'astana';
export interface CityInformation {
  slug: City,
  name: string,
  phones: string[],
}
