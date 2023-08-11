import { GraphQLClient } from 'graphql-request'

import { createUserMutation, getUserQuery } from '@/graphql'

const isProduction = process.env.NODE_ENV === 'production'
const apiURL = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql'
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : '1234'
const serverURL = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000'

const client = new GraphQLClient(apiURL)

const makeGraphQLRequest = async (query: string, variables = {}) => {
	try {
		return await client.request(query, variables)
	} catch (error) {
		throw error
	}
}

export const getUser = async (email: string) => {
	client.setHeader('x-api-key', apiKey)
	return makeGraphQLRequest(getUserQuery, { email })
}

export const createUser = async (name: string, email: string, avatarUrl: string) => {
	const variables = { input: { name, email, avatarUrl } }
	client.setHeader('x-api-key', apiKey)
	return makeGraphQLRequest(createUserMutation, variables)
}
