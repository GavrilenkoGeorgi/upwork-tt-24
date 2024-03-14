export type Nullable<T> = T | null

export interface iDiscountGenerator {
  option: Nullable<string>
  discountCode: Nullable<string>
  note: Nullable<string>
}

export interface iRadioButtonProps {
  id: string
  name: string
  value: string
}
