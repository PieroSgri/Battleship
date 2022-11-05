import * as Middleware from './middleware';

/** 
*Catene di middleware
**/

export const authentication = [
    Middleware.checkHeader,
    Middleware.checkToken,
    Middleware.verifyAndAuthenticate
]

export const refill = [
    Middleware.checkAdmin,
    Middleware.checkUserExistRefill
]

export const catchError = [
    Middleware.logErrors,
    Middleware.errorHandler
]

export const noAuthentication = [
    Middleware.checkPayloadHeader,
    Middleware.checkJSONPayload
]

export const checkToken = [//non richiesta dal prof
    Middleware.checkUserExist,
    Middleware.checkRemainingToken
]

export const beginMatch = [
    Middleware.checkUserExist,
    Middleware.checkOpponentExist,
    Middleware.checkRemainingToken,
    Middleware.checkUserGame,
    Middleware.checkOpponentGame,
    Middleware.checkSameUser
]

export const makeMove = [
    Middleware.checkUserExist,
    Middleware.checkGameExist,
    Middleware.checkGameMove
]

export const gameState = [
    Middleware.checkUserExist,
    Middleware.checkGameExist
]

export const gameLog = [
    Middleware.checkUserExist,
    Middleware.checkGameExist
]

export const userStats = [
    Middleware.checkUserExist,
    Middleware.checkLeaderboardExist
]