import React, { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from "yup";
import { notification } from "antd";

import Header from '../../components/Header';

import { Container } from './styles';

function Contato() {
  // const [disabledButton, setdisabledButton] = useState(false);
  const [setdisabledButton] = useState(false);

  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    },

    validationSchema: Yup.object({
      nome: Yup.string().required("*Campo nome é obrigatório"),
      email: Yup.string()
        .email("Informe um e-mail válido")
        .required("*Campo e-mail é obrigatório"),
      telefone: Yup.string().required("*Campo telefone é obrigatório"),
      mensagem: Yup.string().required("*Campo mensagem é obrigatório"),
    }),

    onSubmit: async (values, { resetForm }) => {
      // const body = `
      //                       <p>Nome: ${values.nome}</p>
      //                       <p>E-mail: ${values.email}</p>
      //                       <p>Telefone: ${values.telefone}</p>
      //                       <p>Mensagem: ${values.mensagem}</p>
      //                     `;

      // const mail = {
      //   // to: "email@cliente.com.br",
      //   to: "",
      //   from: values.email,
      //   as: values.nome,
      //   // bcc: JSON.stringify(["web@agenciaade.com.br"]),
      //   subject: "Novo cadastro via site - Nome do site",
      //   message: body,
      // };

      try {
        setdisabledButton(true);
        // Sucesso ao enviar
        // await ademail.post("/email", mail);

        notification.success({
          message: "Cadastro enviado com sucesso!",
          placement: "bottomRight",
        });

        setdisabledButton(false);
        resetForm();
      } catch (error) {
        // Erro ao enviar
        setdisabledButton(false);
        notification.error({
          message: "Não foi possivel concluir o cadastro!",
          description: "Verfique os campos e tente novamente mais tarde...",
          placement: "bottomRight",
        });
      }
    },
  });



  return (
    <>
      <Header />
      <Container id="contato">
        <div className="contact-container">
          <h2>Contato</h2>
          <div className="contact-body">
            <div className="address">
              <h3>Endereço</h3>
              <a href="http://maps.google.com/?q=Francisco Ribas 250 Ponta Grossa PR" target="_blank" rel="noopener noreferrer">
                Francisco Ribas, 250 Sala 8
                <br />
                CEP: 84010260 - Ponta Grossa, PR
              </a>

              <h3>Telefone</h3>
              <a href="tel:+5542991211416" target="_blank" rel="noopener noreferrer">
                (42) 9 9121-1416
              </a>
            </div>

            <div className="form" >
              <h3>
                Fale Conosco
              </h3>
              <form onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nome}
                />
                {formik.touched.nome && formik.errors.nome ? (
                  <>
                    <span>{formik.errors.nome}</span>
                  </>
                ) : null}

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <>
                    <span>{formik.errors.email}</span>
                  </>
                ) : null}

                <input
                  type="number"
                  name="telefone"
                  placeholder="Telefone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.telefone}
                />
                {formik.touched.telefone && formik.errors.telefone ? (
                  <>
                    <span>{formik.errors.telefone}</span>
                  </>
                ) : null}

                <textarea
                  type="text"
                  name="mensagem"
                  placeholder="Digite uma mensagem..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mensagem}
                />
                {formik.touched.mensagem && formik.errors.mensagem ? (
                  <>
                    <span>{formik.errors.mensagem}</span>
                  </>
                ) : null}

                <button type="submit">ENVIAR</button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contato;
