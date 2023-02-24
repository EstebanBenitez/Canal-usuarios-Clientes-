import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'reactstrap';
import './components/styles/Title.css'
import { LdTitle } from "./components/js/Title";
import { LdSelect } from "./components/js/Select";
import { LdButton } from "./components/js/Button";
import { mapHead, mapBody } from './components/table/aplication/ManagerTable';
import FormularioActulizacion from './components/Formulario/formularioActulizacion';
import {LdTableData } from "./components/table/Table"
import{LdTablePagination}from "./components/ldPaginacion/index"






function App() {

    const [users, setUsers ] = useState ([]);
    const [columns, setColumns ] = useState ([]);
    const [currentPage, setCurrentPage ] = useState (1);
    
    useEffect(() => {
        const _names = mapHead.columns.map(i => i.name);
        const _body = mapBody.data.map(i => [i.name, i.lastName]);
        setColumns(_names)
        setUsers(_body);
    }, [])
    
    return (
        <>
            <LdTitle>Administrar Usuarios y canales </LdTitle>

            <Row className='Selectores'>
                <Col md={3} className='input'>
                    <label className='me-3' style={{ minWidth: '30%' }} >
                        Marca:
                    </label>
                    <LdSelect
                        autoFocus
                        className='w-100'
                        id='select-work-station'
                        onChange=''
                        placeholder='Marca'
                        options='' />
                </Col>

                <Col md={3} className='input'>
                    <label className='me-3' style={{ minWidth: '30%' }} >
                        Mail plan:
                    </label>
                    <LdSelect
                        autoFocus
                        className='w-100'
                        id='select-work-station'
                        onChange=''
                        placeholder='Mail Plan '
                        options='' />
                </Col>

                <Col md={3} className='input'>
                    <label className='me-3' style={{ minWidth: '30%' }}>
                        Cedula Asesora:
                    </label>

                    <input
                        autoFocus
                        placeholder="Cedula Asesora"
                        className="from-control"
                        name=""
                        type="text "

                    >
                    </input>

                </Col>

                <Col md={3} className='input'>
                    <label className='me-3' style={{ minWidth: '30%' }} >
                        Estado:
                    </label>
                    <LdSelect
                        autoFocus
                        className='w-100'
                        id='select-work-station'
                        onChange=''
                        placeholder='Estado'
                        options='' />
                </Col>


                <Col md={3} className='input'>
                    <label className='me-3' style={{ minWidth: '30%' }}>
                        Nombre asesora:
                    </label>

                    <input
                        autoFocus
                        placeholder="Nombre asesora"
                        className="from-control"
                        name="text"
                        type="text "

                    >
                    </input>

                </Col>

                

                <Col md={6} className='LdButton'>
                    <LdButton className="Buttonbuscar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg> Buscar
                    </LdButton>
                </Col>

        </Row>


            <hr />

     <div className="p-2 flex-fill bd-highlight">
                <LdTableData 
                    config={mapHead}
                    thead={columns}
                    tbody={users}
                />

    
                <LdTablePagination
                    currentPage={currentPage}
                    pageLimit={2}
                    max={mapBody.total}
                    showPages={5}
                    setCurrentPage={(p)=>{
                    console.log(`page selected ${p}`)
                    setCurrentPage(p)
                    }}
                />
     </div>

     <FormularioActulizacion/>

        </>




    );
};



export default App;
