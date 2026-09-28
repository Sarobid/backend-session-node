import sessionService from "../services/sessionService.js";

const createSession =  async (req, res) => {
  try {
    const employeData = req.body.employe
    const phoneConnection = req.params.phoneConnection
    const session = await sessionService.createSession(phoneConnection,employeData)
    res.status(201).json({
      message: "Session created successfully",
      data: session
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

const getSessionsByPhoneConnection = async (req,res)=>{
    try {
        const phoneConnection = req.params.phoneConnection
        const sessions = await sessionService.getSessionsByPhoneConnection(phoneConnection)
        res.status(200).json({
            data: sessions
        });
    } catch (error) {
        res.status(500).json({
        message: "Internal server error"
        });
    }
}

export default {
    createSession,
    getSessionsByPhoneConnection
}