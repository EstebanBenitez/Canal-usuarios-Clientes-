import React from 'react'
import '../Formulario/Formulario.css'
import { LdSelect } from "../js/Select";
import { Col, Row } from 'reactstrap';
import '../styles/Title.css'
import { LdButton } from "../js/Button";
import "../styles/Button.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FormularioModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Actualizar Usuarios y clientes
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div class="Atributos">
          <text className='text'> informacion Cliente</text>
          <div id="" class="me-6"> Asesora:</div>
          <div id="" class="me-6"> Usuario:</div>
          <div id="" class="me-3"> Zona:</div>
          <div id="" class="me-3">Campaña:</div>
          <div id="" class="me-3"> Ciudad:</div>
          <div id="" class="me-3"> Perfil:</div>
        </div>

        <Row className=''>

          <Col  md={6}>
            <label className='me-6' style={{ minWidth: '30%' }} >
              Formato de envio Factura
            </label>
            <LdSelect
              autoFocus
              className='w-100'
              id='select-work-station'
              onChange=''
              placeholder='Formato de  envio factura'
              options='' />
          </Col>

          <Col md={6} className="form-group col">  
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Estado:</label>
            <div className="form-check form-switch">
            <input className="form-check-input" 
            type="checkbox" 
            id="flexSwitchCheckDefault">
            </input> 
            </div>
            </Col>


        </Row>

        <Row className='Password'>

          <Col md={6} >

            <label className='me-6' style={{ minWidth: '30%' }}>Contraseña
            </label>
            <input
              placeholder="Clave "
              className="from-control"
              name="Contraseña"
              type="password"
              onChange=''
              autoFocus
            >
            </input>

          </Col>


          <Col md={6} >

            <label className='me-6' style={{ minWidth: '30%' }}> Confirmar contraseña
            </label>
            <input
              placeholder=" Confirmar Contraseña"
              className="from-control"
              name="Confirmar Contraseña"
              type="password"
              autoFocus
              onChange=''

            >
            </input>

          </Col>

        </Row>
      </Modal.Body>
      <Modal.Footer>
        <LdButton variant="secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
          </svg> Cerrar
        </LdButton>
        <LdButton variant="primary" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save2" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
          </svg> Guardar
        </LdButton>
      </Modal.Footer>
    </Modal>
  );
}

function FormularioActulizacion() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Modificar
      </Button>

      <FormularioModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}





export default FormularioActulizacion;