import React from 'react'
import { tokens } from "../theme";
import { Card ,Box,useTheme,Typography} from '@mui/material'

function AddUser() {
const theme =useTheme()
const colors = tokens(theme.palette.mode);


  return (
    <Box>
     <Box p={4}>
        <Typography variant="h2" color={colors.grey[100]} fontWeight="bold">
          COLLECTION REPORT
        </Typography>
        {/* <Box alignItems="center" direction="row" spacing={1}>
          <Button
            color="inherit"
            startIcon={
              <SvgIcon fontSize="small">
                <ArrowUpOnSquareIcon />
              </SvgIcon>
            }
          >
            Import
          </Button> */}
          {/* <Button
            color="inherit"
            startIcon={
              <SvgIcon fontSize="small">
                <ArrowDownOnSquareIcon />
              </SvgIcon>
            }
          >
            Export
          </Button> */}
        {/* </Box> */}
      </Box>
      <Card>
        
      </Card>
      </Box>
  
  

  )
}

export default AddUser
