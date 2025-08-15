export interface UpdateUserActiveUseCase {
    updateActive(id: string): Promise<void>;
}