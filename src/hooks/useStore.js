import { useContext } from 'react'
import { Context } from '../providers/context'

export function useStore() {
	const { dispatch, ...store } = useContext(Context)

	return store
}