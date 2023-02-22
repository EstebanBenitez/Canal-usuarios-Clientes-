import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'reactstrap';
import './components/styles/Title.css'
import { LdTitle } from "./components/js/Title";
import { LdSelect } from "./components/js/Select";
import { LdButton } from "./components/js/Button";
import UserTable from "./components/js/Table";
import ManagerTable from "./components/table/aplication/ManagerTable";
import Table from "./components/table";
import {map} from "./components/table/aplication/ManagerTable";



function App() {

    const [users, setUsers] = useState([{
        Nombre: "Juan",
        Apellido: "Gutiérrez"
    },
    {
        Nombre: "Esteban",
        Apellido: "Benitez"
    }]);
    const [paginate, setPaginate] = useState(
        {
            hasNextPage: false,
            hasPreviousPage: false,
            itemCount: 0,
            page: 1,
            pageCount: 0,
            take: 0
        });

    return (
        <>
            <LdTitle>Administrar Usuarios y canales </LdTitle>

            <Row className='Selectores'>
                <Col md={6} className='input'>
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
            
                <Col md={6} className='input'>
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
    
                <Col md={6} className='input'>
                    <label className='me-3' style={{ minWidth: '30%' }} >
                        Cedula asesora:
                    </label>
                    <LdSelect
                        autoFocus
                        className='w-100'
                        id='select-work-station'
                        onChange=''
                        placeholder='Cedula asesora'/>
                </Col>
        
                <Col md={6} className='input'>
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
            
                <Col md={6} className='text'>
                <label className='me-3' style={{ minWidth: '30%' }}> 
                Nombre asesora: 
                </label>
                  
                  <input
                        autoFocus
                        placeholder="text"
                        className="from-control"
                        name=""
                        type="text "
                        onChange=""
                        >
                    </input>
                        
                </Col>


                <Col md={6} className='Selectores'>
                    <LdButton>
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
                <Table
                    columns={map.columns}
                    data={users}
                    emptyText="No hay datos para mostrar"
                    pageLimit={10}
                    paginate={paginate}
                    pagination
                    setPageTest />
            </div>

        </>




    );
};



export default App;
