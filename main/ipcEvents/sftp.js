const SftpClient = require('ssh2-sftp-client')
const fs = require('fs')
const path = require('path')

const { SFTP_HOST, SFTP_PORT, SFTP_REMOTE_DIR, SFTP_USER } = process.env

const uploadViaSftp = window => async (event, localPath) => {
  const sftp = new SftpClient()

  await sftp.connect({
    host: SFTP_HOST,
    port: Number(SFTP_PORT),
    username: SFTP_USER,
    privateKey: fs.readFileSync(path.join(__dirname, 'keys/id_rsa'))
  })

  const remoteDir = SFTP_REMOTE_DIR 
  const remotePath = `${remoteDir}/${Date.now()}-${path.basename(localPath)}`

  await sftp.fastPut(localPath, remotePath)
  await sftp.end()

  return remotePath
}

module.exports = { uploadViaSftp }
