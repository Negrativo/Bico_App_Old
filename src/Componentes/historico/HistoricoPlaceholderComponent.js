import React from 'react';
import { StyleSheet } from 'react-native';
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade,
  } from "rn-placeholder";

export default function UsuarioPlaceholderComponent(props) {
    return ( 
        <>

            <Placeholder
                Animation={props => (
                    <Fade {...props} style={{ backgroundColor: "gray" }} />
                )}
                Left={props => (
                <PlaceholderMedia
                    style={styles.containerEsquerdo}
                />
                )}
                Right={props => (
                    <Placeholder style={styles.container}>
                        <PlaceholderLine
                            style={styles.detalhes}
                        />
                        <PlaceholderLine
                            style={styles.detalhes}
                        />
                    </Placeholder>
                )}
            />

            <Placeholder
                Animation={props => (
                    <Fade {...props} style={{ backgroundColor: "gray" }} />
                )}
                Left={props => (
                <PlaceholderMedia
                    style={styles.containerEsquerdo}
                />
                )}
                Right={props => (
                    <Placeholder style={styles.container}>
                        <PlaceholderLine
                            style={styles.detalhes}
                        />
                        <PlaceholderLine
                            style={styles.detalhes}
                        />
                    </Placeholder>
                )}
            />

            <Placeholder
                Animation={props => (
                    <Fade {...props} style={{ backgroundColor: "gray" }} />
                )}
                Left={props => (
                <PlaceholderMedia
                    style={styles.containerEsquerdo}
                />
                )}
                Right={props => (
                    <Placeholder style={styles.container}>
                        <PlaceholderLine
                            style={styles.detalhes}
                        />
                        <PlaceholderLine
                            style={styles.detalhes}
                        />
                    </Placeholder>
                )}
            />

            <Placeholder
                Animation={props => (
                    <Fade {...props} style={{ backgroundColor: "gray" }} />
                )}
                Left={props => (
                <PlaceholderMedia
                    style={styles.containerEsquerdo}
                />
                )}
                Right={props => (
                    <Placeholder style={styles.container}>
                        <PlaceholderLine
                            style={styles.detalhes}
                        />
                        <PlaceholderLine
                            style={styles.detalhes}
                        />
                    </Placeholder>
                )}
            />

        </>
    )
}

const styles = StyleSheet.create({
    
    container: {
        alignItems: 'center'
    },

    containerEsquerdo: {
        backgroundColor: '#CFCFCF',
        width: 80,
        height: 80,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 10,
        borderWidth: 0.5,
        borderRadius: 80,
    },

    containerDireito: {
        backgroundColor: '#CFCFCF',
        width: 250,
        height: 140,
        marginBottom: 10,
        marginTop: 10,
    },

    detalhes: {
        width: 200,
        marginBottom: 10,
        marginTop: 10,
    },

});
