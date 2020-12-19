import { IncomingMessage, ServerResponse} from 'http'

const getAllPost = async (request: IncomingMessage, response: ServerResponse) => {
   response.end(JSON.stringify([{ text: 'moon', type: 'public'}])) 
}

export default getAllPost