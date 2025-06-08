import { View, Text, StyleSheet, type TextStyle } from 'react-native'

interface Props{
    children: string;
    bang?: boolean;
    style?: TextStyle;
}

const Hello = (props: Props): JSX.Element => {

//const children = props.children ;
    const { children,bang,style } = props;
    return (
        <View >
            <Text style={[styles.text,style]}>
                Hello {children}{bang === true ? '!' : '2'}

            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color   : '#ffffff',
        backgroundColor : 'green',
        fontSize : 40,
        fontWeight: 'bold',
        padding: 20,
    }

})



export default Hello

