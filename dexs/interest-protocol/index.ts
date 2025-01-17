import fetchURL from "../../utils/fetchURL"
import { SimpleAdapter } from "../../adapters/types";
import { CHAIN } from "../../helpers/chains";


const getVolumeURL = 'https://www.api.interestprotocol.com/api/v2/analytics/getVolume'

interface GetVolumeReturn {
    totalVolume: number;
    volumeRecord: Record<string, Record<string, number>>;
    dailyVolume: number;
    dailyVolumePerMarket: Record<string, Record<string, number>>;
    timestamp: number;
}

const fetch  =  async (_timestamp: number) => {
    const volumeData: GetVolumeReturn = (await fetchURL(getVolumeURL)).data;

    return {
            totalVolume: volumeData.totalVolume.toString(),
            dailyVolume: volumeData.dailyVolume.toString(),
            timestamp: volumeData.timestamp,
        };
};

const adapter: SimpleAdapter = {
    adapter: {
        [CHAIN.SUI]: {
            fetch,
            start: async () => 1684003134,
        }
    },
};

export default adapter;