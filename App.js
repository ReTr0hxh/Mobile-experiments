import React, {useState}from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

let tempo = null;
let ss = 0;
let mm = 25;
let numeroCiclos = 1;

export default function aula15() {

    const [timer, setTimer] = useState(mm + ":0" + ss);
    const [start, setStart] = useState("START")
    const [ciclo, setCiclo] = useState(1)
    const [pausa, setPausa] = useState(false);
    const [advice, setAdvice] = useState("Time to Focus!")


    function Start() {

        if (start == "START") {
            tempo = setInterval(()=>{
               if (ss === 0) { ss = 59; mm--; } else { ss--; }

                let fomart = (mm < 10 ? "0" + mm : mm) + ":" + (ss == 0 || ss < 10 ? "0" + ss : ss)

                setTimer(fomart)

                mm === 0 && ss === 0 ? clearInterval(tempo) : null;

                if (mm === 0 && ss === 0) {
                    numeroCiclos++;
                    setCiclo(numeroCiclos)
                    Break();
                    ss = 0;
                    mm = 25;
                    setTimer((mm < 10 ? "0" + mm : mm) + ":" + (ss == 0 || ss < 10 ? "0" + ss : ss))
                    setStart("START");
                    Break();
                    seachAdvice();
                }

            }, 1000)
            setStart("PAUSE")
       }else{
            clearInterval(tempo);
            setStart("START")
       }

    }

    function Break() {
        if (pausa === false) {
            setPausa(true)
            ss = 0;
            mm = 5;
            setTimer((mm < 10 ? "0" + mm : mm) + ":" + (ss == 0 || ss < 10 ? "0" + ss : ss))
            setStart("START");
            seachAdvice();
        }else{
            setPausa(false)
        }
    }

    function Next() {
        if (pausa === false) {
            numeroCiclos++;
            setCiclo(numeroCiclos)
        }
        ss = 0;
        mm = 25;
        setTimer((mm < 10 ? "0" + mm : mm) + ":" + (ss == 0 || ss < 10 ? "0" + ss : ss))
        setStart("START");
        clearInterval(tempo)
        Break();
        seachAdvice();
    }

    async function seachAdvice() {

        setAdvice("...")
        if (pausa === false) {
            try {
            const r = await fetch(`https://api.adviceslip.com/advice?t=${Math.random()}`);
            const d = await r.json();
            setAdvice(d.slip.advice)
            } catch (erro) {
                console.log("Erro ao buscar o conselho!")
            }
        }else{
            setAdvice("Time to Focus!")
        }
    }



    return(

        <View style={pausa === true ? styles.containerBreak : styles.container}>

            <Text style={[styles.textMain, {fontSize: 40, marginBottom: 100, marginTop: 10}]}>FocusFlow</Text>

            <View style={pausa === true ? styles.pomodoroBreak : styles.pomodoro}>

                <Text style={[styles.textMain, {fontSize: 60}]}>{timer}</Text>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.btnStart} onPress={()=>Start()} disabled={ciclo > 9}>
                        <Text 
                        style={pausa === true ? [styles.textMain, {fontSize: 30, color: '#38858A'}] : [styles.textMain, {fontSize: 30, color: 'red'}]}>{start}
                        </Text>
                    </TouchableOpacity>

                    {start === "PAUSE" ? 
                    <TouchableOpacity style={[{marginLeft: 10}]} onPress={()=>Next()}>
                        <Text style={[styles.textMain, styles.btnDesativado, {fontSize: 30, color: 'white'}]}>{"->"}</Text>
                    </TouchableOpacity> 
                    : null}
                </View>
                


            </View>


            <Text style={[styles.textMain, {marginTop: 40}]}>#{ciclo}</Text>

            <View style={pausa === true ? { width: "auto", height: 'auto', alignItems: 'center'} : styles.container}>
                <Text style={[styles.textMain, {fontSize: 14}]}>{advice}</Text>
            </View>


        </View>
    );



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#c55050'
    },
    pomodoro: {
        backgroundColor: '#b66666',
        width: 250,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textMain: {
        color: 'white',
        fontWeight: 'bold'
    },
    btnStart: {
        backgroundColor: 'white',
        width: 120,
        height: 50,
        alignItems: 'center'
    },
    containerBreak: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#38858A'
    },
    pomodoroBreak: {
        backgroundColor: '#4C9196',
        width: 250,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    

})