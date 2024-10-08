app.post('/registrarfinal', (req, res) => { // se necesita el rut del docente

    if(!req.body.Rut){
        return res.status(400).json({error: "no existe variable Rut en el Body"});

    }

    const conection = mysql.createConnection(dbData);

    conection.connect((error)=>{
        if(error){
            return res.status(500).json({error: "no hay conexion a la BD 1"});
        }else{

            // obtiene la hora actual 
            const horaactual = consultas.GetHoraActual();

            // se busca si esta dentro de algun bloque la hora actual


            let query;
            if(req.body.test){
                query = `SELECT (Termino) FROM Bloque WHERE '12:30:00' < Termino AND '12:30:00' > Inicio`;
            }else{
                query = `SELECT (Termino) FROM Bloque WHERE '${horaactual}' < Termino AND '${horaactual}' > Inicio`;
            }

            
            //




            conection.query(query,(error,results)=>{
                if(error){
                    res.status(500);
                    res.end(error.message);
                }else{
                    if(results.length != 0){

                        var desc = null
                        desc = cursolocal.find(function(e) {
                            return e.RUT_Docente == req.body.Rut;
                          })
                        console.log("finalizando...");         
                        if(desc != null){
                            if(cursolocal.length != 0){
                              //RUT_Docente, Bloque,Inicio,Termino,Ramo

                              const formatofecha = consultas.GetFechaHoy();
                              const queryInsert =`INSERT INTO Clase (Dia, Hora_Inicio, Hora_Termino, IP,Estado, Ramo_Nombre, Ramo_Periodo) VALUES ('${formatofecha}','${desc.Inicio}','${horaactual}','192.178.0.0','Asistido','${desc.Ramo}','${semestreActual}')`;
                              conection.query(queryInsert,(error,results)=>{
                                conection.end();
                                if(error){
                                    return res.status(500).json({error: "no hay conexion a la BD 2"});
                                }else{
                                    cursolocal = cursolocal.filter(cursosel => cursosel.RUT_Docente != req.body.Rut);
                                    desc.Termino = horaactual;
                                    console.log("curso finalizazo:" +desc.RUT_Docente+" / "+desc.Inicio+" / "+desc.Termino+" / "+desc.Ramo)
                                    console.log('cursos actuales en pendiente:')
                                    cursolocal.forEach(element => {
                                    console.log(element.RUT_Docente+" / "+element.Inicio+" / "+element.Ramo);

                                  });
      
                                  // selection y modificar las columnas de la tabla clase para definir la columna de termino y estado
                                  return res.status(200).json({ok: "registar fin de clases"});
                                }
                              });
                            }


                        }else{
                            return res.status(400).json({error: "no se encontro clase iniciada"});
                        }
                    }else{
                        return res.status(400).json({error: "registro fuera de horario de clase"});
                    }
                }
            });
        }
    });
});
