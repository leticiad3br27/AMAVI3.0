
app.post("/deleteAccount", (req, res) => {
    const { password } = req.body;
    const userId = req.session.userId; // Assumindo que a sessão armazena o ID do usuário
  
    // Verificar se a senha está correta
    db.query("SELECT password FROM users WHERE id = ?", [userId], (err, results) => {
      if (err) return res.status(500).json({ success: false, message: "Erro no servidor." });
  
      if (results.length === 0 || results[0].password !== password) {
        return res.status(401).json({ success: false, message: "Senha incorreta." });
      }
  
      // Deletar conta
      db.query("DELETE FROM users WHERE id = ?", [userId], (err) => {
        if (err) return res.status(500).json({ success: false, message: "Erro ao deletar a conta." });
  
        res.json({ success: true });
      });
    });
  });
  