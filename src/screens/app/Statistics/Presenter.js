import {View, Text} from 'react-native';
import React from 'react';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';

const customDataPoint = () => {
  return (
    <View
      style={{
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderWidth: 4,
        borderRadius: 10,
        borderColor: '#07BAD1',
      }}
    />
  );
};
const customLabel = val => {
  return (
    <View style={{width: 70, marginLeft: 7}}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{val}</Text>
    </View>
  );
};
const data = [
  {
    value: 100,
    labelComponent: () => customLabel('22 Nov'),
    customDataPoint: customDataPoint,
  },
  {
    value: 140,
    hideDataPoint: true,
  },
  {
    value: 250,
    customDataPoint: customDataPoint,
  },
  {
    value: 290,
    hideDataPoint: true,
  },
  {
    value: 410,
    labelComponent: () => customLabel('24 Nov'),
    customDataPoint: customDataPoint,
    showStrip: true,
    stripHeight: 190,
    stripColor: 'black',
    dataPointLabelComponent: () => {
      return (
        <View
          style={{
            backgroundColor: 'black',
            paddingHorizontal: 8,
            paddingVertical: 5,
            borderRadius: 4,
          }}>
          <Text style={{color: 'white'}}>410</Text>
        </View>
      );
    },
    dataPointLabelShiftY: -70,
    dataPointLabelShiftX: -4,
  },
  {
    value: 440,
    hideDataPoint: true,
  },
  {
    value: 300,
    customDataPoint: customDataPoint,
  },
  {
    value: 280,
    hideDataPoint: true,
  },
  {
    value: 180,
    labelComponent: () => customLabel('26 Nov'),
    customDataPoint: customDataPoint,
  },
  {
    value: 150,
    hideDataPoint: true,
  },
  {
    value: 150,
    customDataPoint: customDataPoint,
  },
];
export default function Presenter({color, text}) {
  return (
    <Wrapper color={color}>
      <BarChart
        isAnimated={true}
        color={color.secondary}
        barStyle={{backgroundColor: color.secondary}}
        lineBehindBars={false}
        data={data}
        frontColor={color.secondary}
        hideRules={true}
        barBorderRadius={12}
      />
      <LineChart
        data={data}
        thickness={6}
        color={color.secondary}
        maxValue={600}
        noOfSections={3}
        areaChart
        yAxisTextStyle={{color: 'lightgray'}}
        curved
        startFillColor={color.secondary}
        endFillColor={color.background}
        startOpacity={0.4}
        endOpacity={0.4}
        spacing={38}
        initialSpacing={10}
        yAxisColor="lightgray"
        xAxisColor="lightgray"
        hideRules={true}
      />
      <PieChart data={data} />
    </Wrapper>
  );
}
