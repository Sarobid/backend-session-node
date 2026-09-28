import sessionService from "../services/sessionService.js";

const createSession =  async (req, res) => {
  try {
    const employeData = req.body.employe
    const deviceId = req.params.deviceId
    const session = await sessionService.createSession(deviceId,employeData)
    res.status(201).json({
      message: "Session created successfully",
      data: session
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: error.message
    });
  }
};

const getSessionsBydeviceId = async (req,res)=>{
    try {
        const deviceId = req.params.deviceId
        const sessions = await sessionService.getSessionsBydeviceId(deviceId)
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
    getSessionsBydeviceId
}