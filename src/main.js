const core = require('@actions/core')
const HttpClient = require('@actions/http-client').HttpClient

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const tribe_url = core.getInput('tribe_url', { required: true })
    const bot_id = core.getInput('bot_id', { required: true })
    const bot_secret = core.getInput('bot_secret', { required: true })
    const chat_uuid = core.getInput('chat_uuid', { required: true })
    const bot_message = core.getInput('bot_message', { required: true })

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`Posting to ${tribe_url} ...`)

    const req_params = {
      action: 'broadcast',
      bot_id,
      bot_secret,
      chat_pubkey: chat_uuid,
      content: bot_message
    }

    const httpClient = new HttpClient('sphinx-bot', [], {
      allowRetries: true,
      maxRetries: 3
    })
    const response = await httpClient.postJson(tribe_url, req_params)

    core.debug(`Response: ${response.result.json}`)

    // Set outputs for other workflow steps to use
    core.setOutput('message', response.result.json.message)
    core.setOutput('success', response.result.json.success)
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}
