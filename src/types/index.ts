import {Dispatch, SetStateAction, EventHandler, SyntheticEvent} from "react";

export type SelectOption = {value: string | number, description: string};
export type StateHandler = <S, E extends SyntheticEvent<any,Event>>(setState: Dispatch<SetStateAction<S>>) => EventHandler<E>
export type CanBeUndefined<T> = undefined | T;