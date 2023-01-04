import { FC } from 'react';
import { Text, View } from 'react-native';
import { useAppContext } from '../utils/providers/App.provider';
import { groupBy } from 'lodash';
import { VictoryPie } from 'victory-native';
import { styleHistory } from '../utils/styles/historyScreen';
import { themes } from '../utils/styles/themes';
import { styleAnalytics } from '../utils/styles/analyticsScreen';

export const Analytics: FC = () => {
  const appContext = useAppContext();

  const data = Object.entries(groupBy(appContext.moodList, 'mood.emoji'))?.map(([key, value]) => ({
    x: key,
    y: value.length,
  }));

  return (
    <View style={styleAnalytics.container}>
      {data?.length ? (
        <VictoryPie
          labelRadius={80}
          radius={150}
          innerRadius={50}
          colorScale={[
            themes.colorPurple,
            themes.colorLavender,
            themes.colorBlue,
            themes.colorGrey,
            themes.colorWhite,
          ]}
          style={{ labels: { fontSize: 30 } }}
          data={data}
        />
      ) : (
        <Text style={styleHistory.notfound}>No Analytics</Text>
      )}
    </View>
  );
};