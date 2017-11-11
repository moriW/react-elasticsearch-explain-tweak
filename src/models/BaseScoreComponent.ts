
export interface BaseScoreComponent {
    label: string,
    id: number,
    result: number,
    children: BaseScoreComponent[]
}