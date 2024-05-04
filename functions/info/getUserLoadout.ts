
import config from "../../constants/riot_routes.json";
import { instance } from "../../utils/instance";
import headersConfig from "../../constants/index.json";

const skins_headers = headersConfig.skins_headers;
const { url } = config.userLoadout;

interface accData {
    puuid: string;
    region: string;
    token: string;
    ent_token: string;
}

async function getUserLoadout(accData: accData) {
    try {
        if (accData.region.toLowerCase() == 'latam' || accData.region.toLowerCase() == 'br') accData.region = 'na';
        skins_headers["Authorization"] = "Bearer " + accData.token 
        skins_headers['X-Riot-Entitlements-JWT'] = accData.ent_token;
        const res = await instance.get(url.replace('{puuid}', accData.puuid).replace('{region}',accData.region), { headers: skins_headers });
        
        return res.data;
    } catch (error) {
        console.log(error.response.statusText);
        return "An error occured";
    }
}
export default getUserLoadout;