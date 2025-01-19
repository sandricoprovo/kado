export type Error = {
	message: string;
};
export type SuccessTuple<T> = [T, null];
export type ErrorTuple = [null, Error];
