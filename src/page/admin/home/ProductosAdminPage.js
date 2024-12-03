import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderCustom from "../../../components/HeaderCustom";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import SkeletonLoading from "../../../components/SkeletonLoading";
import { BackdropStyle } from "../../../styles/styles";
import { servicios } from "../../../constantes/constantes";
import '../../../styles/AppCss.css'
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { getProductos } from "../../../api/ApiService";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';


function ProductosAdminPage() {
  const [dataProductos, setDataProductos] = useState([]);
  const [loadingPage, setLoadingPage] = useState(false);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    handleListarProductos();
  }, []);

  const handleListarProductos = () => {

    getProductos(1, 100)
      .then((response) => {
        console.log("response-getProductos", response);
        if (response.body.length > 0) {
          setDataProductos(response.body);
          setLoadingPage(true);
        } else {
          setDataProductos([]);
          setLoadingPage(true);
        }
      })
      .catch((error) => {
        console.log("error-getProductos", error);
        setDataProductos([]);
        setLoadingPage(true);
      });
  };

  const handleEditClick = (id) => () => {
    console.log('Edit', id);
  };

  const handleDeleteClick = (id) => () => {
    console.log('Delete', id);
    setDataProductos(dataProductos.filter((row) => row.id !== id));
  }

  const handleSaveClick = (id) => () => {
    console.log('Save', id);
  }

  const handleCancelClick = (id) => () => {
    console.log('Cancel', id);
  }

  const GridRowModes = {
    View: 'view',
    Edit: 'edit',
  };




  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'nombre',
      headerName: 'Titulo',
      width: 150,
      editable: true,
    },
    {
      field: 'descripcion',
      headerName: 'Descripcion',
      width: 150,
      editable: true,
    },
    {
      field: 'precio',
      headerName: 'Precio',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Estado',
      editable: true,
      width: 160,
    },
    {
      field: 'visualizaciones',
      headerName: 'Visualizaciones',
      editable: false,
      width: 160,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];



  return (
    <HeaderCustom>
      {loadingPage ? (
        <Container sx={{}} style={{}}>
          <div style={{
            // marginTop: 15,
            // height: mobile ? 'auto' : '100vh',
          }}>
            <Box sx={{ height: 800, width: '100%' }}>
              <DataGrid
                rows={dataProductos}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                // checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </div>
        </Container>

      ) : (
        <Container sx={{}} style={{}}>
          <SkeletonLoading />
        </Container>
      )}
    </HeaderCustom>
  );
}

export default ProductosAdminPage;