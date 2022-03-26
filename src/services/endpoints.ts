export const endpoints = {
    users: "/users",
    usersByPage: (page: number) => `/users?page=${page}`
}