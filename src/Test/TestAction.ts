import Api from '../Apis/AxiosInterceptor';
import * as endPoints from '../Apis/ApiEndPoints';

export const GetApi = async () => {
    const data = await Api.get(`${endPoints.API_GET_TEST_DATA}`);
    if (data) {
        console.log(data)
    }
}
